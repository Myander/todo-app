import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/Buttons/Buttons.styled';
import {
  BellIcon,
  MessengerIcon,
  CaretIcon,
  PlusIcon,
  CogIcon,
  ChevronIcon,
  ArrowIcon,
  BoltIcon,
} from '../../components/UI/Buttons/Icons';
import {
  Navbar,
  NavbarNav,
  Item,
  IconButton,
  Dropdown,
  MenuItem,
  IconLeft,
  IconRight,
  Menu,
  MenuSecondary,
} from './TestNav.styles';
import { Transition } from 'react-transition-group';

const Nav: FC = props => {
  return (
    <Navbar>
      <NavbarNav>{props.children}</NavbarNav>
    </Navbar>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
}

const NavItem: FC<NavItemProps> = props => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(currState => !currState);
  };

  return (
    <Item>
      <IconButton onClick={handleOpen}>{props.icon}</IconButton>
      {open && props.children}
    </Item>
  );
};

const DropdownMenu: FC = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(0);

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  interface ItemProps {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    goToMenu?: string;
  }

  const DropdownItem: FC<ItemProps> = props => {
    return (
      <MenuItem onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <IconLeft>{props.leftIcon}</IconLeft>
        {props.children}
        <IconRight>{props.rightIcon}</IconRight>
      </MenuItem>
    );
  };

  return (
    <Dropdown height={menuHeight}>
      <Transition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        {state => (
          <Menu state={state}>
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings"
            >
              Settings
            </DropdownItem>
          </Menu>
        )}
      </Transition>
      <Transition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        {state => (
          <MenuSecondary state={state}>
            <DropdownItem leftIcon={<BoltIcon />} goToMenu="main">
              Main
            </DropdownItem>
          </MenuSecondary>
        )}
      </Transition>
    </Dropdown>
  );
};

const MainNoAuth: FC = props => {
  console.log('MAIN NOT AUTHENTICATED');
  return (
    <div>
      <Nav>
        <NavItem icon={<PlusIcon />} />

        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Nav>
      {/* <Link to="/home">HOME</Link> */}
    </div>
  );
};

export default MainNoAuth;
