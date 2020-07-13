import React, { useRef, useState, Fragment, useEffect } from 'react';
import { BlueButton, CancelButton } from '../../UI/Buttons/Buttons.styled';
import {
  IconContainer,
  StyledPlusIcon,
  PlusButton,
  ButtonContainer,
} from './NewTodo.styles';
import {
  EditingArea,
  EditingContent,
  DrafEditorContainer,
  DraftEditor,
  ItemContainer,
} from '../Todo/Todo.styles';
import DropdownClick from '../../UI/Dropdown/DropdownClick';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { CalenderRangeIcon } from '../../UI/Buttons/Icons';
interface NewTodoProps {
  onAddTodo: (text: string, scheduled: string | null) => void;
  initialDate?: Date;
}

const NewTodo: React.FC<NewTodoProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [add, setAdd] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(
    props.initialDate ? props.initialDate : undefined
  );
  const modifiers = {
    days: { daysOfWeek: [1, 2, 3, 4, 5, 6, 7] },
  };

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

  const handleAddTodo = () => {
    if (inputRef.current!.innerText === '') {
      alert('enter a todo');
      return;
    }
    if (selectedDay) {
      props.onAddTodo(
        inputRef.current!.innerText,
        selectedDay.getTime().toString()
      );
    } else {
      props.onAddTodo(inputRef.current!.innerText, null);
    }

    setAdd(false);
  };

  const handleToggleScheduleDropdown = () => {
    setToggleDropdown(currToggle => !currToggle);
  };

  const handleShowInput = () => {
    setAdd(currState => !currState);
  };

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  // const handleChange = (event: React.FormEvent) => {
  //   const target = event.target as HTMLInputElement;
  //   setContent(target.value);
  // };

  useEffect(() => {
    if (add) inputRef.current!.focus();
  });

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

  const todoInput = (
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
              <span>{''}</span>
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
        <BlueButton onClick={handleAddTodo}>Save</BlueButton>
        <CancelButton onClick={handleShowInput}>Cancel</CancelButton>
      </ButtonContainer>
    </div>
  );

  return (
    <div>
      {add ? (
        <Fragment>{todoInput}</Fragment>
      ) : (
        <PlusButton onClick={handleShowInput}>
          <IconContainer>
            <StyledPlusIcon />
          </IconContainer>
          Add Todo
        </PlusButton>
      )}
    </div>
  );
};

export default NewTodo;
