import React, { FC } from 'react';
import { StyledSideNav } from './SideNav.styled';

interface SideNavProps {
  toggleNav: boolean;
  onToggleNav: () => void;
}

const SideNav: FC<SideNavProps> = props => {
  return (
    <StyledSideNav open={props.toggleNav}>
      <a href="/">About</a>
      <a href="/">Services</a>
      <a href="/">Clients</a>
      <a href="/">Contact</a>
    </StyledSideNav>
  );
};

export default SideNav;
