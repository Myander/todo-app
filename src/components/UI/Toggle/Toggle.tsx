import React from 'react';
import { ReactComponent as SunIcon } from '../../../icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../../icons/moon.svg';
import { ToggleButton } from './Toggle.styled';

interface ToggleProps {
  toggleTheme: () => void;
  darkTheme: boolean;
}

const Toggle: React.FC<ToggleProps> = props => {
  return (
    <ToggleButton darkTheme={props.darkTheme} onClick={props.toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleButton>
  );
};

export default Toggle;
