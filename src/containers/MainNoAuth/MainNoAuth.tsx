import React from 'react';
import { Navbar, ItemContainer, MainContainer, MainText } from './Main.styles';
import {
  DefaultButton,
  Button,
} from '../../components/UI/Buttons/Buttons.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ActionButton = styled(Button)`
  color: #dadce1;
  background-color: #0066ff;
  padding: 1.2rem 3rem;
  margin-top: 1rem;
  font-size: 2rem;
  &:hover {
    background-color: #0052cc;
  }
`;
const MainNoAuth = () => {
  return (
    <div>
      <Navbar>
        <ItemContainer>
          <h3>Placeholder</h3>
        </ItemContainer>
        <ItemContainer>
          <Link to="/login">
            <DefaultButton
              color="#dadce1"
              backgroundColor="rgba(255,255,255,0.1)"
            >
              Login
            </DefaultButton>
          </Link>
          <Link to="/signup">
            <DefaultButton
              color="#dadce1"
              backgroundColor="rgba(255,255,255,0.1)"
            >
              Signup
            </DefaultButton>
          </Link>
        </ItemContainer>
      </Navbar>
      <MainContainer>
        <MainText>
          Organize it all <br />
          with TodoLite <br />
          <Link to="/signup">
            <ActionButton>Get Started</ActionButton>
          </Link>
        </MainText>
      </MainContainer>
    </div>
  );
};

export default MainNoAuth;