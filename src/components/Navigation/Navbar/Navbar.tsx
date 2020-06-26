import React, { FC } from 'react';
import { NavContainer, NavItems } from './Navbar.styled';
import Toggle from '../../UI/Toggle/Toggle';
import { Button } from '../../UI/Buttons/Buttons.styled';
import DrawerToggle from '../SideNav/DrawerToggle/DrawerToggle';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogout } from '../../../store/auth/actions';

interface NavProps {
  onHandleThemeToggle: () => void;
  toggleDarkTheme: boolean;
  onToggleNav: () => void;
}

const Navbar: FC<NavProps> = props => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(authLogout());
  };

  return (
    <NavContainer>
      <NavItems>
        <DrawerToggle onToggleNav={props.onToggleNav} />
      </NavItems>
      <NavItems>
        <Toggle
          toggleTheme={props.onHandleThemeToggle}
          darkTheme={props.toggleDarkTheme}
        />
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
        <Button onClick={handleSignout}>Log out</Button>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
