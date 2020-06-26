import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0.8rem;
`;

export const CenteredText = styled.div`
  position: absolute;
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`;
