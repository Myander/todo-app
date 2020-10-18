import styled from 'styled-components';

interface SideNavProps {
  open: boolean;
}

export const StyledSideNav = styled.nav<SideNavProps>`
  height: 100%;
  margin-top: 4.5rem;
  position: fixed;
  z-index: 900;
  top: 0;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  overflow-x: hidden;
  padding-top: 6rem;
  transition: all 0.3s;
  left: 0;
  width: ${props => (props.open ? '25.5rem' : '0')};
  @media screen and (min-width: 780px) {
    left: ${props => (props.open ? 0 : '-25.5rem')};
    width: 25.5rem;
  }

  & .link-active {
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  & a {
    width: 100%;
    padding: 0.8rem 0.8rem 0.8rem 3rem;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.main};
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & a:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  & span {
    margin-top: 3px;
  }
`;
