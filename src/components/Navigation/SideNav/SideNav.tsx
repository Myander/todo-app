import React, { FC } from 'react';
import { StyledSideNav } from './SideNav.styled';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { CalenderIcon, InboxIcon, ClockIcon } from '../../UI/Buttons/Icons';
import styled from 'styled-components';

interface SideNavProps {
  toggleNav: boolean;
  onToggleNav: () => void;
}

const Calender = styled(CalenderIcon)`
  color: #209606;
  height: 2rem;
  width: 2rem;
  margin-right: 0.8rem;
`;

const Inbox = styled(InboxIcon)`
  color: blueviolet;
  height: 2rem;
  width: 2rem;
  margin-right: 0.8rem;
`;

const Clock = styled(ClockIcon)`
  color: #256bf7;
  height: 2rem;
  width: 2rem;
  margin-right: 0.8rem;
`;

const SideNav: FC<SideNavProps> = props => {
  const { url } = useRouteMatch();

  return (
    <StyledSideNav open={props.toggleNav}>
      <NavLink exact to={`${url}`} activeClassName="link-active">
        <Inbox />
        <span>Inbox</span>
      </NavLink>
      <NavLink to={`${url}/today`} activeClassName="link-active">
        <Clock />
        <span>Today</span>
      </NavLink>
      <NavLink to={`${url}/upcoming`} activeClassName="link-active">
        <Calender />
        <span>Upcoming</span>
      </NavLink>
    </StyledSideNav>
  );
};

export default SideNav;
