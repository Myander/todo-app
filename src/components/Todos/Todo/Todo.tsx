import React, { FC, useState, Fragment, useRef, useEffect } from 'react';
import { Todo as TodoModel } from '../../../store/todos/types';
import {
  TodoContent,
  ItemContainer,
  ButtonContainer,
  TodoContainer,
  EditingArea,
  EditingContent,
  DrafEditorContainer,
  DraftEditor,
  DateContainer,
} from './Todo.styles';
import Checkbox from '../../UI/Checkbox/Checkbox';
import {
  EditIcon,
  DeleteIcon,
  CalenderRangeIcon,
} from '../../UI/Buttons/Icons';
import {
  BlueButton,
  CancelButton,
  IconButton,
} from '../../UI/Buttons/Buttons.styled';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import DropdownClick from '../../UI/Dropdown/DropdownClick';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface TButtonProps {
  show: boolean;
}
const ToggleButton = styled(IconButton)<TButtonProps>`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

interface TodoProps {
  todo: TodoModel;
  onDeleteTodo: (id: string) => void;
  onHandleEdit: (id: string, content: string, scheduled: string | null) => void;
  toggleModal: (id: string) => void;
}

const Todo: FC<TodoProps> = props => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(props.todo.content);
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(
    props.todo.scheduled ? new Date(parseInt(props.todo.scheduled)) : undefined
  );
  const [showIcons, setShowIcons] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const modifiers = {
    days: { daysOfWeek: [1, 2, 3, 4, 5, 6, 7] },
  };
  // const handleChange = (event: React.FormEvent) => {
  //   const target = event.target as HTMLInputElement;
  //   setText(target.value);
  // };

  const handleCancel = () => {
    setEdit(currEdit => !currEdit);
    setText(props.todo.content);
  };

  const handleSave = () => {
    if (inputRef.current!.innerHTML === props.todo.content) {
      setEdit(false);
      return;
    }
    if (selectedDay) {
      props.onHandleEdit(props.todo.id, text, selectedDay.getTime().toString());
    } else {
      props.onHandleEdit(props.todo.id, text, null);
    }
    setEdit(false);
  };

  const toggleEdit = () => {
    setEdit(currEdit => !currEdit);
    setShowIcons(false);
  };

  const handleToggleModal = () => {
    props.toggleModal(props.todo.id);
  };

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  const handleToggleScheduleDropdown = () => {
    setToggleDropdown(currToggle => !currToggle);
  };

  useEffect(() => {
    if (edit) {
      inputRef.current!.focus();
      setEndofContenteditable();
    }
  });

  useEffect(() => {
    if (edit) {
      setToggleDropdown(false);
      return;
    }
    if (
      selectedDay &&
      selectedDay.getTime().toString() !== props.todo.scheduled
    ) {
      props.onHandleEdit(
        props.todo.id,
        props.todo.content,
        selectedDay.getTime().toString()
      );
      setToggleDropdown(false);
    }
  }, [selectedDay, edit, props]);

  function setEndofContenteditable() {
    if (document.createRange) {
      const range = document.createRange();
      range.selectNodeContents(inputRef.current!);
      range.collapse(false);
      const selection = window.getSelection();
      selection!.removeAllRanges();
      selection!.addRange(range);
    }
  }

  // const todoInput = (
  //   <div>
  //     <InputContainer>
  //       <Input value={text} onChange={handleChange} ref={inputRef} />
  //       {/* <RightButton>Schedule</RightButton> */}
  //     </InputContainer>
  //     <ButtonContainer>
  //       <BlueButton onClick={handleSave}>Save</BlueButton>
  //       <CancelButton onClick={handleCancel}>Cancel</CancelButton>
  //     </ButtonContainer>
  //   </div>
  // );

  const todoInput2 = (
    <div style={{ marginBottom: '10px' }}>
      <EditingArea>
        <EditingContent>
          <DrafEditorContainer>
            <DraftEditor
              ref={inputRef}
              contentEditable="true"
              role="textbox"
              spellCheck="true"
              suppressContentEditableWarning={true}
            >
              <span>{text}</span>
            </DraftEditor>
          </DrafEditorContainer>
        </EditingContent>
        <ItemContainer onClick={setEndofContenteditable}>
          <DropdownClick
            showIcon={true}
            icon={<CalenderRangeIcon />}
            open={toggleDropdown}
            onHandleToggle={handleToggleScheduleDropdown}
          >
            <style>
              {`.DayPicker-Day:hover {
                  background-color: rgba(255,255,255,0.2) !important;
                }`}
            </style>
            <DayPicker
              selectedDays={selectedDay}
              onDayClick={handleDayClick}
              modifiers={modifiers}
            />
          </DropdownClick>
          {selectedDay
            ? months[selectedDay?.getMonth()] +
              ' ' +
              selectedDay?.getDate().toString()
            : null}
        </ItemContainer>
      </EditingArea>
      <ButtonContainer>
        <BlueButton onClick={handleSave}>Save</BlueButton>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </ButtonContainer>
    </div>
  );

  const todoNormal = (
    <TodoContainer
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <TodoContent>
        <ItemContainer>
          <Checkbox onCompleteTodo={props.onDeleteTodo} id={props.todo.id} />
          {props.todo.content}
        </ItemContainer>
        <ItemContainer>
          <ToggleButton onClick={toggleEdit} show={showIcons}>
            <EditIcon />
          </ToggleButton>
          <DropdownClick
            showIcon={showIcons}
            icon={<CalenderRangeIcon />}
            open={toggleDropdown}
            onHandleToggle={handleToggleScheduleDropdown}
          >
            <style>
              {`.DayPicker-Day:hover {
                  background-color: rgba(255,255,255,0.2) !important;
                }`}
            </style>
            <DayPicker
              selectedDays={selectedDay}
              onDayClick={handleDayClick}
              modifiers={modifiers}
            />
          </DropdownClick>
          <ToggleButton onClick={handleToggleModal} show={showIcons}>
            <DeleteIcon />
          </ToggleButton>
        </ItemContainer>
      </TodoContent>
      <DateContainer>
        {selectedDay
          ? months[selectedDay?.getMonth()] +
            ' ' +
            selectedDay?.getDate().toString()
          : null}
      </DateContainer>
    </TodoContainer>
  );

  return (
    <Fragment>
      {edit ? (
        <Fragment>{todoInput2}</Fragment>
      ) : (
        <Fragment>{todoNormal}</Fragment>
      )}
    </Fragment>
  );
};

export default Todo;
