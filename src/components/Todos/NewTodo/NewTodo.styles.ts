import styled from 'styled-components';
import { PlusIcon } from '../../UI/Buttons/Icons';

export const StyledPlusIcon = styled(PlusIcon)`
  color: #e0190b;
  height: 1.8rem;
  width: 1.8rem;
  padding: 0;
  margin: 0;
  border-radius: 50%;
`;

export const IconContainer = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 85px;
  font-size: 1.4rem;
  cursor: pointer;
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  &:hover {
    color: #e0190b;
  }

  &:hover svg {
    /* background-color: #e0190b; */
    color: white;
  }

  &:hover div {
    background-color: #e0190b;
  }
`;

export const ElementContainer = styled.div`
  margin-top: 1rem;
`;
