import styled from 'styled-components';

export const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Dropdown = styled.div`
  position: absolute;
  left: 50%;
  top: 3rem;
  /* width: 100px;
  height: 100px; */
  transform: translateX(-50%);
  background: ${props => props.theme.colors.backgroundSecondary};
  z-index: 4000;
`;

export const DateButton = styled.div`
  display: inline-block;
  position: relative;
  font-size: 2rem;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
`;

export const Carousel = styled.div`
  display: flex;
`;

interface ItemProps {
  selectedDay: boolean;
}

export const CarouselItem = styled.button<ItemProps>`
  border: none;
  outline: none;
  background: transparent;
  color: ${props => props.theme.colors.main};
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border-bottom: ${props =>
    props.selectedDay
      ? '2px solid orange'
      : '1px solid ' + props.theme.colors.highlight};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.btn_background};
  }
  &:disabled {
    cursor: auto;
    background-color: transparent;
  }

  /* &:disabled .day-date-text {
    color: rgba(255, 255, 255, 0.4);
  } */
  /* &:not(:last-child) {
    margin-right: 1rem;
  } */
`;

interface DayTextProps {
  isCurrDay: boolean;
}

export const DayText = styled.div<DayTextProps>`
  color: ${props => (props.isCurrDay ? 'orange' : 'rgba(255, 255, 255, 0.7)')};
`;

interface DateTextProps {
  isDisabled: boolean;
  isCurrDay: boolean;
}

export const DateText = styled.div<DateTextProps>`
  color: ${props =>
    props.isDisabled
      ? 'rgba(255, 255, 255, 0.4)'
      : props.isCurrDay
      ? 'orange'
      : props.theme.colors.main};
`;

export const CButton = styled.button`
  padding: 5px 8px;
  color: blueviolet;
  background-color: ${props => props.theme.colors.secondary};
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  &:focus {
    outline: none;
  }
`;
