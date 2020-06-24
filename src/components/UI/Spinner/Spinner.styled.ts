import styled from 'styled-components';

export const Spinner = styled.div`
  border-radius: 50%;
  width: 8em;
  height: 8em;
  margin: 6rem auto;
  font-size: 1rem;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(30, 6, 6, 0.2);
  border-right: 1.1em solid rgba(30, 6, 6, 0.2);
  border-bottom: 1.1em solid rgba(30, 6, 6, 0.2);
  border-left: 1.1em solid #1e0606;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
