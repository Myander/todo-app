import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  background: papayawhip;
  position: relative;
`;

export const Title = styled.main`
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -12%);
  font-size: 4rem;
  font-weight: 700;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  background: #f7f7f7;
  padding: 3rem 4rem;
  border-radius: 0.5rem;
`;
export const Form = styled.form`
  width: 45rem;
`;
