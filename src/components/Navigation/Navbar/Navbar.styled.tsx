import styled from 'styled-components';

export const NavContainer = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0 2px 0.5rem 0 rgba(0, 0, 0, 0.16),
    0 2px 1rem 0 rgba(0, 0, 0, 0.12);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  width: 100%;
  transition: ${({ theme }) => theme.transition};
`;

export const NavItems = styled.div`
  margin: 0;
  padding: 0 3rem;
  display: flex;
  align-items: center;
`;
