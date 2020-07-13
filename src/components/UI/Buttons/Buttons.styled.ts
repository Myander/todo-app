import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  color: ${props => props.theme.colors.main};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
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
    transition: all 0.2s;
  }
`;

interface BtnProps {
  color: string;
  backgroundColor: string;
}

export const DefaultButton = styled.button<BtnProps>`
  border: none;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  outline: none;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.8rem 1.8rem;
  margin: 0 0.75rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: filter 300ms;
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  &:hover {
    filter: brightness(0.85);
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

export const IconButton = styled.div`
  position: relative;
  padding: 3px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 10rem;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: rgba(153, 153, 153, 0.3);
  }
`;
