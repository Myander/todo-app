import React, { FC } from 'react';
import { NavContainer, NavItems } from './Navbar.styled';
import { IconButton } from '../../UI/Buttons/Buttons.styled';
import { useDispatch } from 'react-redux';
import { authLogout } from '../../../store/auth/actions';
import { BurgerIcon } from '../../UI/Buttons/Icons';
import styled from 'styled-components';
import Dropdown from '../../UI/Dropdown/Dropdown';

interface NavProps {
  onHandleThemeToggle: () => void;
  onToggleNav: () => void;
  theme: string;
}

const LargeBurger = styled(BurgerIcon)`
  width: 2.4rem;
  height: 2.4rem;
  color: ${props => props.theme.colors.main};
`;

const Navbar: FC<NavProps> = props => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(authLogout());
  };

  return (
    <NavContainer>
      <NavItems>
        <IconButton onClick={props.onToggleNav}>
          <LargeBurger />
        </IconButton>
      </NavItems>
      <NavItems>
        <Dropdown
          onLogout={handleSignout}
          theme={props.theme}
          onToggleTheme={props.onHandleThemeToggle}
        />
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
