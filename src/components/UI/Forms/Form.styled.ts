import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  width: 100%;
  background: papayawhip;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.main`
  font-size: 4rem;
  font-weight: 700;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -12%);
`;

export const FormContainer = styled.div`
  background: #f7f7f7;
  padding: 3rem 4rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  overflow: hidden;
  @media screen and (max-width: 600px) {
    background: transparent;
  }
`;

export const Form = styled.form`
  width: 45rem;
`;
