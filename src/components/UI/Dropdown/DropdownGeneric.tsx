import React, { useEffect, useCallback, FC, useRef } from 'react';
import { Dropdown } from './DropdownGeneric.styles';

interface DropdownProps {
  open: boolean;
  onCloseDropdown: () => void;
}

const DropdownGeneric: FC<DropdownProps> = props => {
  const { onCloseDropdown, open } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutSide = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (modalRef.current && modalRef.current.contains(target)) {
        return;
      }
      onCloseDropdown();
    },
    [onCloseDropdown]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutSide, false);
    } else {
      document.removeEventListener('click', handleClickOutSide, false);
    }
    return () => {
      document.removeEventListener('click', handleClickOutSide, false);
    };
  }, [open, handleClickOutSide]);

  return (
    <div ref={modalRef} onClick={e => e.stopPropagation()}>
      {open && <Dropdown>{props.children}</Dropdown>}
    </div>
  );
};

export default DropdownGeneric;
