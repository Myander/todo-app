import styled from 'styled-components';
import { PlusIcon } from '../../UI/Buttons/Icons';

export const StyledPlusIcon = styled(PlusIcon)`
  color: #e0190b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.8rem;
  width: 1.8rem;
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
    background-color: #e0190b;
    color: white;
  }
`;

export const ElementContainer = styled.div`
  margin-top: 1rem;
`;
