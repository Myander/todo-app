import styled from 'styled-components';

export const Field = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px dashed ${props => props.theme.colors.main};
  margin: 4rem auto 1rem;

  & input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.5rem 0;
    background: none;
    color: white;
    font-size: 1.8rem;
    font-weight: bold;

    &:valid {
      color: yellowgreen;
    }

    &:invalid {
      color: orangered;
    }
  }

  & label {
    color: ${props => props.theme.colors.main};
    font-size: 1.8rem;
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(0);
    transform-origin: 0%;
    transition: transform 400ms;
  }

  &::after {
    content: '';
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: #39b4ed;
    border-radius: 1px;
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 500ms ease;
    top: 2px;
  }

  &:focus-within {
    border-color: transparent;
  }

  &:focus-within::after {
    transform: scaleX(1);
  }

  &:focus-within label,
  & input:not(:placeholder-shown) + label {
    transform: scale(0.8) translateY(-4rem);
  }
`;

export const ShowPassword = styled.span`
  position: absolute;
  cursor: help;
  font-size: 1.2rem;
  right: 0.25rem;
  bottom: 0.5rem;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
  font-size: 1.6rem;
`;
