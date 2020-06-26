import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  color: ${props => props.theme.colors.main};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 0.8rem 1.8rem;
  margin: 0 0.75rem;
  font-weight: 600;
  border-radius: 0.5rem;
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${props => props.theme.colors.btn_background};
    transition: color 0.3s ease-in;
  }
`;

export const BlueButton = styled(Button)`
  color: white;
  background-color: #0066ff;
  &:hover {
    background-color: #0052cc;
  }
`;

export const RedButton = styled(Button)`
  color: white;
  background-color: #db3814;
  &:hover {
    background-color: #b3290b;
  }
`;

export const CancelButton = styled(Button)`
  padding: 0;
  border-radius: 0;
  &:hover {
    text-decoration: underline;
    background-color: transparent;
  }
`;
