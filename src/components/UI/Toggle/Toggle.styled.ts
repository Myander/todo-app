import styled from 'styled-components';

interface ToggleProps {
  darkTheme: boolean;
}

export const ToggleButton = styled.button<ToggleProps>`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 3rem;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 3.5rem;
  outline: none;
  margin: 0 0.75rem;
  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.5s linear;

    /* sun icon */
    &:first-child {
      transform: ${({ darkTheme }) =>
        darkTheme ? 'translateY(100px)' : 'translateY(0)'};
    }

    /* moon icon */
    &:nth-child(2) {
      transform: ${({ darkTheme }) =>
        darkTheme ? 'translateY(0)' : 'translateY(-100px)'};
    }
  }
`;
