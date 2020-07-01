import styled from 'styled-components';

interface SideNavProps {
  open: boolean;
}

export const StyledSideNav = styled.div<SideNavProps>`
  height: 100%;
  margin-top: 4.5rem;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  overflow-x: hidden;
  padding-top: 6rem;
  transition: all 0.5s;
  left: 0;
  width: ${props => (props.open ? '30.5rem' : '0')};
  @media screen and (min-width: 780px) {
    left: ${props => (props.open ? 0 : '-30.5rem')};
    width: 30.5rem;
  }

  & .link-active {
    font-weight: 700;
    background-color: ${props => props.theme.colors.highlight};
  }

  & a {
    width: 100%;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.colors.main};
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & a:hover {
    background-color: ${props => props.theme.colors.highlight};
  }

  & span {
    margin-top: 3px;
  }
`;
