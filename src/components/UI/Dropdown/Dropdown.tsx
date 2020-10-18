import React, { FC } from 'react';
import {
  MenuItem,
  MenuContent,
  Dropdown as Ddown,
  Menu,
} from './Dropdown.styles';
import { CogIcon as Cog } from '../../UI/Buttons/Icons';
import { IconButton, Button } from '../../UI/Buttons/Buttons.styled';
import Toggle from '../Toggle/Toggle';
import styled from 'styled-components';

const CogIcon = styled(Cog)`
  color: ${props => props.theme.colors.main};
  width: 2.4rem;
  height: 2.4rem;
`;

const LogoutBtn = styled(Button)`
  padding: 1.3rem 2.4rem;
  background-color: ${props => props.theme.colors.btn_background};
  transition: filter 300ms;
  &:hover {
    filter: brightness(0.8);
  }
`;

interface DropdownProps {
  onLogout: () => void;
  theme: string;
  onToggleTheme: () => void;
}

const Dropdown: FC<DropdownProps> = props => {
  return (
    <Ddown>
      <IconButton>
        <CogIcon />
      </IconButton>
      <Menu>
        <MenuContent>
          <MenuItem>
            <Toggle theme={props.theme} toggleTheme={props.onToggleTheme} />
          </MenuItem>
          <MenuItem>
            <LogoutBtn onClick={props.onLogout}>Log out</LogoutBtn>
          </MenuItem>
        </MenuContent>
      </Menu>
    </Ddown>
  );
};

export default Dropdown;
