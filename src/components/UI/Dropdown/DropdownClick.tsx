import React, { FC, useEffect, useRef, useCallback } from 'react';
import { Dropdown } from './DropdownClick.styles';
import { IconButton } from '../Buttons/Buttons.styled';
import styled from 'styled-components';

interface CTButtonProps {
  show: boolean;
  toggle: boolean;
}
const ConditionalToggleButton = styled(IconButton)<CTButtonProps>`
  visibility: ${props => (props.show || props.toggle ? 'visible' : 'hidden')};
`;

interface DropdownProps {
  showIcon: boolean;
  icon?: React.ReactNode;
  open: boolean;
  onHandleToggle: () => void;
}

const DropdownClick: FC<DropdownProps> = props => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { onHandleToggle } = props;
  const handleClickOutSide = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (modalRef.current && modalRef.current.contains(target)) {
        return;
      }
      onHandleToggle();
    },
    [onHandleToggle]
  );

  useEffect(() => {
    if (props.open) {
      document.addEventListener('click', handleClickOutSide, false);
    } else {
      document.removeEventListener('click', handleClickOutSide, false);
    }
    return () => {
      document.removeEventListener('click', handleClickOutSide, false);
    };
  }, [props.open, handleClickOutSide]);

  return (
    <ConditionalToggleButton
      onClick={props.onHandleToggle}
      show={props.showIcon}
      toggle={props.open}
      ref={modalRef}
    >
      {props.icon}
      {props.open && (
        <Dropdown onClick={e => e.stopPropagation()}>{props.children}</Dropdown>
      )}
    </ConditionalToggleButton>
  );
};

export default DropdownClick;
