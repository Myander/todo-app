import React from 'react';
import { ReactComponent as SunIcon } from '../../../icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../../icons/moon.svg';
import { ToggleButton } from './Toggle.styled';

interface ToggleProps {
  toggleTheme: () => void;
  theme: string;
}

const Toggle: React.FC<ToggleProps> = props => {
  return (
    <ToggleButton
      darkTheme={props.theme === 'dark' ? true : false}
      onClick={props.toggleTheme}
    >
      <SunIcon />
      <MoonIcon />
    </ToggleButton>
  );
};

export default Toggle;
