import React, { FC } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  width: 35px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  & div {
    width: 90%;
    height: 2px;
    margin: 3px 0;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

interface DrawerProps {
  onToggleNav: () => void;
}

const DrawerToggle: FC<DrawerProps> = props => {
  return (
    <ToggleContainer onClick={props.onToggleNav}>
      <div />
      <div />
      <div />
    </ToggleContainer>
  );
};

export default DrawerToggle;
