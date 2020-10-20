import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNotification = styled(motion.div)`
  width: 250px;
  padding: 1.4rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.main};
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.colors.menuShadow};
  align-items: center;
  /* flex: 0 0 100px; */
  position: absolute;
  bottom: 10px;
  left: 30%;
  border-radius: 3px;
`;

export const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 2px 4px;
  margin: 0;
  border: none;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.btn_background};
  }
`;

export const UndoButton = styled.div`
  margin-right: 10px;
  padding: 4px 6px;
  border-radius: 3px;
  color: #cf4513;
  cursor: pointer;
  &:hover {
    background: rgba(207, 69, 19, 0.5);
    color: white;
  }
`;

export const StyledPath = styled(motion.path)`
  stroke: ${({ theme }) => theme.colors.main};
`;
