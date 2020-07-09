import styled from 'styled-components';

export const Dropdown = styled.div`
  position: absolute;
  left: 50%;
  top: 3rem;
  /* width: 100px;
height: 100px; */
  transform: translateX(-50%);
  background: ${props => props.theme.colors.backgroundSecondary};
  z-index: 4000;
`;
