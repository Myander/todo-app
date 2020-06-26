import styled from 'styled-components';

export const TodoContent = styled.div`
  border-bottom: 1px solid #f1f1f1;
  font-size: 1.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 4rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const InputContainer = styled.div`
  font-size: 1.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
`;

export const Input = styled.input`
  flex-grow: 1;
  font-size: 1.6rem;
  padding: 1.2rem 1.5rem;
  height: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 4px 0px 0px 4px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export const RightButton = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  height: 100%;
  width: 10rem;
  padding-left: 1rem;
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
`;
