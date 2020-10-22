import React, { FC, useState, useEffect, useRef } from 'react';
import { Todo as TodoModel } from '../../../store/todos/types';
import DayPicker from 'react-day-picker';
import {
  DateButton,
  Content,
  Carousel,
  CarouselItem,
  ControlContainer,
  DateText,
  DayText,
  Nav,
  DayList,
  DayListItem,
  ListItemTitle,
  ListItemContent,
  Container,
  ButtonContainer,
} from './Upcoming.styles';
import 'react-day-picker/lib/style.css';
import { CaretIcon } from '../../../components/UI/Buttons/Icons';
import DropdownGeneric from '../../../components/UI/Dropdown/DropdownGeneric';
import moment, { Moment } from 'moment';
import TodoList from '../../../components/Todos/TodoList/TodoList';
import NewTodo from '../../../components/Todos/NewTodo/NewTodo';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../../components/UI/Buttons/Icons';
import {
  IconButton,
  Button,
} from '../../../components/UI/Buttons/Buttons.styled';
import styled from 'styled-components';

const TodayButton = styled(Button)`
  padding: 0.5rem 0.6rem;
  font-weight: 400;
`;

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

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface UpcomingProps {
  todos: TodoModel[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, content: string, scheduled: string | null) => void;
  onAddTodo: (text: string, scheduled: string | null) => void;
  loading: boolean;
  toggleNav: boolean;
}

interface EntryObj {
  date: string;
  todos: TodoModel[];
}

const Upcoming: FC<UpcomingProps> = props => {
  const { todos } = props;
  const [open, setOpen] = useState(false);
  const now = new Date();
  const [currDate, setCurrDate] = useState(moment());
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const [currDates, setCurrDates] = useState<Array<EntryObj>>([]);

  useEffect(() => {
    const tempDate = moment(currDate);
    const dates = [];
    for (let i = 0; i < 14; i++) {
      const newEntry: EntryObj = {
        date: tempDate.format('DD-MM-YYYY'),
        todos: [],
      };
      todos.forEach(todo => {
        if (todo.scheduled) {
          const mm = moment(parseInt(todo.scheduled));
          if (tempDate.format('DD-MM-YYYY') === mm.format('DD-MM-YYYY')) {
            newEntry.todos.push(todo);
          }
        }
      });

      dates.push(newEntry);
      tempDate.add(1, 'days');
    }
    setCurrDates(dates);
  }, [todos, currDate]);

  useEffect(() => {
    console.log('list refs: ', itemRefs.current);
    if (itemRefs.current.length > 0 && itemRefs.current[0]) {
      console.log(
        'item 1:',
        itemRefs.current[0].offsetTop,
        itemRefs.current[0].offsetHeight
      );
    }
  }, [currDates]);

  function momentToDate(m: Moment) {
    return new Date(
      m.get('year'),
      m.get('month'),
      m.get('date'),
      m.get('hour'),
      m.get('minute'),
      m.get('second'),
      m.get('millisecond')
    );
  }

  function getSundayDate() {
    const dayOfWeek = currDate.day();
    const dayOfMonth = currDate.date();
    return dayOfMonth - dayOfWeek;
  }

  function nextWeek() {
    const newDate = moment(currDate);
    newDate.week(newDate.week() + 1);
    setCurrDate(newDate);
    setSelectedDay(momentToDate(newDate));
  }

  function prevWeek() {
    const newDate = moment(currDate);
    newDate.week(newDate.week() - 1);
    setCurrDate(newDate);
    setSelectedDay(momentToDate(newDate));
  }

  function today() {
    const date = moment();
    setCurrDate(date);
    setSelectedDay(momentToDate(date));
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  function MatchRest() {
    return (
      currDate.year() === now.getFullYear() &&
      currDate.month() === now.getMonth()
    );
  }

  function correctDate(day: number) {
    const currentDate = moment(currDate);
    const LastDayOfMonth = currentDate.endOf('month').date();
    // january case ??
    const LastDayOfPrevMonth = currentDate
      .subtract(1, 'month')
      .endOf('month')
      .date();
    if (day < 1) return LastDayOfPrevMonth + day;
    if (day > LastDayOfMonth) return day - LastDayOfMonth;
    return day;
  }

  function selectDay(day: number) {
    const currDay = selectedDay!.getDate();
    const tempDay = moment(selectedDay);

    if (currDay === day) return;
    if (currDay < day) tempDay.add(day - currDay, 'days');

    if (currDay > day) tempDay.subtract(currDay - day, 'days');

    const newDay = momentToDate(tempDay);
    setSelectedDay(newDay);
    setCurrDate(moment(newDay));
  }

  const toggleDropdown = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setOpen(currOpen => !currOpen);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
    setCurrDate(moment(day));
    setOpen(false);
  };

  let sundayDate = getSundayDate();
  const currentDay = now.getDate();
  const listStart = moment(currDate);
  const selected = selectedDay?.getDate();

  return (
    <Container>
      <Nav ref={listRef}>
        <ControlContainer>
          <DateButton onClick={toggleDropdown}>
            <Content>
              <span>{months[currDate.month()] + ' ' + currDate.year()}</span>
              <CaretIcon />
            </Content>
            <DropdownGeneric open={open} onCloseDropdown={closeDropdown}>
              <style>
                {`.DayPicker-Day:hover {
                  background-color: rgba(255,255,255,0.2) !important;
                }`}
              </style>
              <DayPicker
                selectedDays={selectedDay}
                onDayClick={handleDayClick}
                month={selectedDay}
              />
            </DropdownGeneric>
          </DateButton>
          <ButtonContainer>
            <IconButton onClick={prevWeek}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={nextWeek}>
              <ChevronRightIcon />
            </IconButton>
            <TodayButton onClick={today}>Today</TodayButton>
          </ButtonContainer>
        </ControlContainer>
        <Carousel>
          {week.map((day, index) => {
            return (
              <CarouselItem
                key={day}
                disabled={sundayDate + index < currentDay && MatchRest()}
                selectedDay={sundayDate + index === selected}
                onClick={() => selectDay(sundayDate + index)}
              >
                <DayText
                  isCurrDay={sundayDate + index === currentDay && MatchRest()}
                >
                  {day}
                </DayText>
                <DateText
                  isDisabled={sundayDate + index < currentDay && MatchRest()}
                  isCurrDay={sundayDate + index === currentDay && MatchRest()}
                >
                  {correctDate(sundayDate + index)}
                </DateText>
              </CarouselItem>
            );
          })}
        </Carousel>
      </Nav>

      <DayList>
        {currDates.map((item, index) => {
          const date = listStart.date();
          const initial = momentToDate(listStart);
          const dayOfWeek = listStart.day();
          const monthOfYear = listStart.month();
          const year = listStart.year();
          listStart.add(1, 'days');
          return (
            <DayListItem
              key={`${date}-${dayOfWeek}-${monthOfYear}-${year}`}
              ref={ref => (itemRefs.current[index] = ref)}
            >
              <ListItemTitle>{`${week[dayOfWeek]} ${months[monthOfYear]} ${date}`}</ListItemTitle>
              <ListItemContent>
                <TodoList
                  todos={item.todos}
                  onDeleteTodo={props.onDeleteTodo}
                  onHandleEdit={props.onEditTodo}
                  loading={props.loading}
                />
                <NewTodo onAddTodo={props.onAddTodo} initialDate={initial} />
              </ListItemContent>
            </DayListItem>
          );
        })}
      </DayList>
    </Container>
  );
};

export default Upcoming;
