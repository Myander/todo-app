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
    background: ${props =>
      props.strength > 0
        ? 'linear-gradient(to right, red, orangered)'
        : props.theme.colors.backgroundSecondary};
  }
  & span:nth-child(2) {
    background: ${props =>
      props.strength > 1
        ? 'linear-gradient(to right, orangered, yellow)'
        : props.theme.colors.backgroundSecondary};
  }
  & span:nth-child(3) {
    background: ${props =>
      props.strength > 2
        ? 'linear-gradient(to right, yellow, yellowgreen)'
        : props.theme.colors.backgroundSecondary};
  }
  & span:nth-child(4) {
    background: ${props =>
      props.strength > 3
        ? 'linear-gradient(to right, yellowgreen, green)'
        : props.theme.colors.backgroundSecondary};
  }
`;
