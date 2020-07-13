import React from 'react';
import { Navbar, ItemContainer, MainContainer, MainText } from './Main.styles';
import {
  DefaultButton,
  Button,
} from '../../components/UI/Buttons/Buttons.styled';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootState';

const ActionButton = styled(Button)`
  color: #dadce1;
  background-color: #0066ff;
  padding: 1.2rem 3rem;
  margin-top: 1rem;
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    background-color: #0052cc;
  }
`;

const MainNoAuth = () => {
  const selectLoggedIn = (state: RootState) => state.auth.loggedIn;
  const isLoggedIn = useSelector(selectLoggedIn);

  if (isLoggedIn || localStorage.getItem('isLoggedIn') === 'true')
    return <Redirect to="/home" />;

  return (
    <div>
      <Navbar>
        <ItemContainer>
          <h2>TodoLite</h2>
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
          <div>
            Organize it all <br />
            with TodoLite
          </div>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <ActionButton>Get Started</ActionButton>
          </Link>
        </MainText>
      </MainContainer>
    </div>
  );
};

export default MainNoAuth;
