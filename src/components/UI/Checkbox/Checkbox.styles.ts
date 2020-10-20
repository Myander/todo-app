import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 3rem;
  cursor: pointer;
  font-size: 2.2rem;
  user-select: none;
  height: 2rem;

  & .hidden-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .checkbox-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 5px;
    background-color: #dddd;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover .checkbox-input {
    background-color: #aaaa;
  }

  & .checkbox-input::after {
    content: '';
    position: absolute;
    display: none;
  }

  & .hidden-input:hover ~ .checkbox-input::after {
    display: block;
  }

  & .checkbox-input::after {
    left: 6px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
