import styled from 'styled-components';

export const TodoContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.highlight};
  width: 100%;
`;
export const TodoContent = styled.div`
  /* border-bottom: 1px solid ${props => props.theme.colors.highlight}; */
  font-size: 1.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 4rem;

  /* &:hover .todo-icon-container {
    visibility: visible;
  } */
`;

export const DateContainer = styled.div`
  margin-left: 3rem;
  color: ${props => props.theme.colors.secondary};
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
  border: 1px solid ${props => props.theme.colors.highlight};
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.main};
  text-decoration: none;
  overflow-wrap: break-word;
  overflow-y: auto;
  overflow-x: hidden;
  line-break: after-white-space;
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
  display: flex;
  align-items: center;
`;

export const EditingArea = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 10px 0;
  cursor: text;
  color: ${({ theme }) => theme.colors.main};
  border-color: hsla(0, 0%, 100%, 0.1);
  background-color: ${({ theme }) => theme.colors.editorBackground};
  &:focus {
    border-color: #555;
    outline: none;
  }
`;

export const EditingContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2.1rem;
  border: none;
  word-break: break-word;
  padding-bottom: 1rem;
`;
export const RichTextInput = styled.div`
  flex: 1;
`;

export const DrafEditorContainer = styled.div`
  background-color: hsla(0, 0%, 100%, 0);
  border-left: 0.1px solid transparent;
  height: inherit;
  flex: 1;
`;

export const DraftEditor = styled.div`
  user-select: text;
  overflow-wrap: break-word;
  overflow-y: auto;
  overflow-x: hidden;
  line-break: after-white-space;
  &:focus {
    outline: none;
  }
`;

export const ExtraContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
