import React, { FC } from 'react';
import { CheckboxContainer } from './Checkbox.styles';

interface Props {
  onCompleteTodo: (id: string) => void;
  id: string;
}
const Checkbox: FC<Props> = props => {
  const handleComplete = () => {
    props.onCompleteTodo(props.id);
  };
  return (
    <CheckboxContainer>
      <input type="checkbox" className="hidden-input" />
      <span onClick={handleComplete} className="checkbox-input"></span>
    </CheckboxContainer>
  );
};

export default Checkbox;
