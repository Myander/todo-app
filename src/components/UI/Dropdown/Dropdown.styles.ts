import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;
  width: 6rem;
  &:hover nav {
    display: block;
  }
`;

export const Menu = styled.nav`
  position: absolute;
  display: none;
  top: 3rem;
  right: 0;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  border: 2px solid ${props => props.theme.colors.highlight};
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: transform 500ms ease;
  z-index: 3000;
  text-align: center;
`;

export const MenuContent = styled.div`
  min-width: 160px;
  text-align: center;
`;

export const MenuItem = styled.div`
  padding: 2rem 1rem;
  margin: 2px auto;
  display: flex;
  justify-content: center;
  text-decoration: none;

  /* &:hover {
    background-color: ${props => props.theme.colors.btn_background};
  } */
`;
