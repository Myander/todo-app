import styled from 'styled-components';

interface ModalProps {
  open: boolean;
}

export const BackDrop = styled.div<ModalProps>`
  min-height: 100vh;
  width: 100%;
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 32rem;
  height: 18rem;
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.backgroundMain};
`;
