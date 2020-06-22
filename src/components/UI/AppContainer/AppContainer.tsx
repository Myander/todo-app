import styled from 'styled-components';

export const AppContainer = styled.div`
  margin-top: 4.5rem;
`;

interface ContentProps {
  toggleNav: boolean;
}

export const Content = styled.div<ContentProps>`
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  padding: 8rem 6rem;
  /* min-height: 100vh; */
  @media screen and (min-width: 780px) {
    margin-left: ${props => (props.toggleNav ? '30.5rem' : 0)};
    /* width: 30.5rem; */
  }
`;
