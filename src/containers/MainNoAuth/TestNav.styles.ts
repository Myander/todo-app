import styled from 'styled-components';

/* 
bg - #242526;
bg-accent: #484a4d
text-color: #dadce1
border: 1px solid #474A4D
border-radius: 8px;
speed: 500ms

a {
  color: #dadce1;
  text-decoration: none;
}
button-size: calc(var(${props.theme.navSize}) * 0.5)
*/

export const Navbar = styled.nav`
  height: ${props => props.theme.navSize};
  background-color: #242526;
  color: #dadce1;
`;

export const NavbarNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Item = styled.li`
  width: calc(${props => props.theme.navSize} * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const IconButton = styled.a`
  color: #dadce1;
  text-decoration: none;
  width: calc(${props => props.theme.navSize} * 0.6);
  height: calc(${props => props.theme.navSize} * 0.6);
  border-radius: 50%;
  background-color: #484a4d;
  padding: 5px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 300ms;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

interface DropdownProps {
  height: number;
}
export const Dropdown = styled.div<DropdownProps>`
  position: absolute;
  top: 5.8rem;
  width: 300px;
  height: ${props => (props.height > 0 ? props.height + 20 + 'px' : null)};
  transform: translateX(-45%);
  background-color: #242526;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 500ms ease;
`;

export const MenuItem = styled.a`
  height: 5rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background-color 500ms;
  padding: 0.5rem;

  &:hover {
    background-color: #525357;
  }
`;

interface AnimationProps {
  state: string;
}

export const Menu = styled.div<AnimationProps>`
  width: 100%;
  transition: transform 500ms ease;
  transform: translateX(
    ${props => {
      switch (props.state) {
        case 'entering':
          return '-110%';
        case 'entered':
          return '0%';
        case 'exiting':
          return '-110%';
        case 'exited':
          return '-110%';
        default:
          return '-110%';
      }
    }}
  );
`;

export const MenuSecondary = styled.div<AnimationProps>`
  width: 100%;
  transition: transform 500ms ease;
  transform: translateX(
    ${props => {
      switch (props.state) {
        case 'entering':
          return '110%';
        case 'entered':
          return '0%';
        case 'exiting':
          return '110%';
        case 'exited':
          return '110%';
        default:
          return '110%';
      }
    }}
  );
`;

export const IconLeft = styled.span``;
export const IconRight = styled.span`
  margin-left: auto;
`;
