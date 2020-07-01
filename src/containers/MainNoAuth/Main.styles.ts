import styled from 'styled-components';

export const Navbar = styled.nav`
  height: ${props => props.theme.navSize};
  background-color: #242526;
  color: #dadce1;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  height: calc(${props => props.theme.navSize} * 0.8);
`;

export const MainContainer = styled.main`
  min-height: calc(100vh - ${props => props.theme.navSize});
  position: relative;
`;

// export const MainContent = styled.div`
//   position: absolute;
//   top: 30%;
//   left: 50%;
//   width: 30rem;
//   transform: translate(-30%, -50%);
//   background: red;
// `;

export const MainText = styled.div`
  width: 100%;
  position: absolute;
  top: 30%;
  transform: translateY(-30%);
  font-weight: 700;
  font-size: 5rem;
  line-height: 5.5rem;
  text-align: center;
`;
