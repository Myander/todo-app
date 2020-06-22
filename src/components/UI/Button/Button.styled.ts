import styled from 'styled-components';

interface ButtonProps {
  bg: string;
  color: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.bg};
  border: none;
  color: ${props => props.color};
  outline: none;
  cursor: pointer;
  padding: 0.8rem 2rem;
  margin: 0 0.75rem;
  font-weight: 600;
  border-radius: 0.5rem;
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #0041ab;
    transition: color 0.3s ease-in;
  }
`;
