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

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const Nav = styled.nav`
  position: sticky;
  top: 4.5rem;
  width: 100%;
  padding-top: 4rem;
  background: ${props => props.theme.colors.backgroundMain};
  z-index: 5;
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
  /* background: ${props => props.theme.colors.backgroundSecondary}; */
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
`;

interface DayTextProps {
  isCurrDay: boolean;
}

export const DayText = styled.div<DayTextProps>`
  color: ${props => (props.isCurrDay ? 'orange' : props.theme.colors.main)};
`;

interface DateTextProps {
  isDisabled: boolean;
  isCurrDay: boolean;
}

export const DateText = styled.div<DateTextProps>`
  color: ${props =>
    props.isDisabled
      ? props.theme.colors.disabled
      : props.isCurrDay
      ? 'orange'
      : props.theme.colors.main};
`;

export const DayList = styled.ul`
  padding-top: 2rem;
  list-style-type: none;
`;

export const DayListItem = styled.li`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 3rem;
`;

export const ListItemTitle = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.highlight};
  padding-bottom: 2px;
`;

export const ListItemContent = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
