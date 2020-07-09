import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Todo as TodoModel } from '../../../store/todos/types';
import DayPicker from 'react-day-picker';
import {
  CarouselContainer,
  DateButton,
  Content,
  Carousel,
  CarouselItem,
  ControlContainer,
  CButton,
  DateText,
  DayText,
} from './Upcoming.styles';
import 'react-day-picker/lib/style.css';
import { CaretIcon } from '../../../components/UI/Buttons/Icons';
import DropdownGeneric from '../../../components/UI/Dropdown/DropdownGeneric';
import moment from 'moment';
import MomentLocaleUtils from 'react-day-picker/moment';
const Container = styled.div`
  width: 100%;
  max-width: 800px;
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
}

const Upcoming: FC<UpcomingProps> = props => {
  const [open, setOpen] = useState(false);
  const now = new Date();
  const [currDate, setCurrDate] = useState(moment());
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());

  useEffect(() => {
    if (
      currDate.year() === selectedDay!.getFullYear() &&
      currDate.month() === selectedDay!.getMonth() &&
      currDate.date() === selectedDay!.getDate()
    ) {
      return;
    }
    setCurrDate(moment(new Date(selectedDay!.getTime())));
  }, [selectedDay]);

  useEffect(() => {
    if (
      currDate.year() === selectedDay!.getFullYear() &&
      currDate.month() === selectedDay!.getMonth() &&
      currDate.date() === selectedDay!.getDate()
    ) {
      return;
    }
    setSelectedDay(
      new Date(
        currDate.get('year'),
        currDate.get('month'), // 0 to 11
        currDate.get('date'),
        currDate.get('hour'),
        currDate.get('minute'),
        currDate.get('second'),
        currDate.get('millisecond')
      )
    );
  }, [currDate]);

  function getSundayDate() {
    const dayOfWeek = currDate.day(); // 6
    const dayOfMonth = currDate.date(); // 1
    return dayOfMonth - dayOfWeek; // -5
  }

  function nextWeek() {
    const newDate = moment(currDate);
    newDate.week(newDate.week() + 1);
    setCurrDate(newDate);
  }

  function prevWeek() {
    const newDate = moment(currDate);
    newDate.week(newDate.week() - 1);
    setCurrDate(newDate);
  }

  function today() {
    setCurrDate(moment());
  }

  function MatchRest() {
    return (
      currDate.year() === now.getFullYear() &&
      currDate.month() === now.getMonth()
    );
  }

  function correctDate(day: number) {
    const test = moment(currDate);
    const LastDayOfMonth = test.endOf('month').date();
    const LastDayOfPrevMonth = test.subtract(1, 'month').endOf('month').date();
    console.log('end of prev month', LastDayOfPrevMonth);
    if (day < 1) return LastDayOfPrevMonth + day;
    if (day > LastDayOfMonth) return day - LastDayOfMonth;
    return day;
  }

  function selectDay(day: number) {
    const currDay = selectedDay!.getDate();
    const tempDay = moment(selectedDay!.getTime());
    console.log(tempDay.year());
    if (currDay === day) return;
    if (currDay < day) tempDay.add(day - currDay, 'days');
    if (currDay > day) tempDay.subtract(currDay - day, 'days');

    const newDay = new Date(
      tempDay.get('year'),
      tempDay.get('month'),
      tempDay.get('date'),
      tempDay.get('hour'),
      tempDay.get('minute'),
      tempDay.get('second'),
      tempDay.get('millisecond')
    );
    setSelectedDay(newDay);
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
    setOpen(false);
  };

  let sundayDate = getSundayDate();
  const currentDay = now.getDate();
  const selected = selectedDay?.getDate();

  return (
    <Container>
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
              // modifiers={modifiers}
            />
          </DropdownGeneric>
        </DateButton>
        <div>
          <CButton onClick={prevWeek}>{'<'}</CButton>
          <CButton onClick={nextWeek}>{'>'}</CButton>
          <CButton onClick={today}>Today</CButton>
        </div>
      </ControlContainer>

      <CarouselContainer>
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
      </CarouselContainer>
    </Container>
  );
};

export default Upcoming;
