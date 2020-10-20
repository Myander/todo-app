import React, { FC } from 'react';
import { StyledButton, StyledPath } from './Notification.styles';

interface PathProps {
  d: string;
}

interface CloseBtnProps {
  close: () => void;
}

const Path: FC<PathProps> = props => (
  <StyledPath
    fill="transparent"
    strokeWidth="3"
    // stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const CloseButton: FC<CloseBtnProps> = ({ close }) => (
  <StyledButton onClick={close}>
    <svg width="15" height="15" viewBox="0 0 20 20">
      <Path d="M 3 16.5 L 17 2.5" />
      <Path d="M 3 2.5 L 17 16.346" />
    </svg>
  </StyledButton>
);
