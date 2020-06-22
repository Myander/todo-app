import styled from 'styled-components';

interface StrengthProps {
  strength: number;
}

export const Strength = styled.div<StrengthProps>`
  display: flex;
  height: 2rem;
  width: 100%;

  & span {
    margin-right: 0.5rem;
    height: 100%;
    width: 25%;
    transition: box-shadow 500ms;
    /* box-shadow: inset 0px 20px #1f1f1f; */
  }

  & span:nth-child(1) {
    background: linear-gradient(to right, red, orangered);
    box-shadow: ${props =>
      props.strength > 0
        ? 'none'
        : 'inset 0px 22px' + props.theme.colors.backgroundSecondary};
  }
  & span:nth-child(2) {
    background: linear-gradient(to right, orangered, yellow);
    box-shadow: ${props =>
      props.strength > 1
        ? 'none'
        : 'inset 0px 22px' + props.theme.colors.backgroundSecondary};
  }
  & span:nth-child(3) {
    background: linear-gradient(to right, yellow, yellowgreen);
    box-shadow: ${props =>
      props.strength > 2
        ? 'none'
        : 'inset 0px 22px' + props.theme.colors.backgroundSecondary};
  }
  & span:nth-child(4) {
    background: linear-gradient(to right, yellowgreen, green);
    box-shadow: ${props =>
      props.strength > 3
        ? 'none'
        : 'inset 0px 22px' + props.theme.colors.backgroundSecondary};
  }
`;
