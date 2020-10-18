import styled from 'styled-components';

export const Tooltip = styled.div`
  visibility: hidden;
  background-color: ${props => props.theme.colors.highlight};
  color: #fff;
  text-align: center;
  padding: 3px 0;
  border-radius: 6px;
  width: 100px;
  top: 120%;
  left: 50%;
  margin-left: -50px;
  font-size: 1.4rem;
  position: absolute;
  z-index: 1;
  color: ${props => props.theme.colors.main};
  opacity: 0;
  transition: opacity 0.3s;
  &::after {
    content: ' ';
    position: absolute;
    bottom: 100%; /* At the bottom of the tooltip */
    left: 50%; /* To the right of the tooltip */
    transform: translateX(-50%);
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent
      ${props => props.theme.colors.highlight} transparent;
  }
`;
