import React, { FC } from 'react';
import { BackDrop, StyledModal } from './Modal.styles';

interface ModalProps {
  open: boolean;
}

const Modal: FC<ModalProps> = props => {
  return (
    <BackDrop open={props.open}>
      <StyledModal>{props.children}</StyledModal>
    </BackDrop>
  );
};

export default Modal;
