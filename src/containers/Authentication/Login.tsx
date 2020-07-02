import React, { FC, useState, useEffect } from 'react';
import {
  Form,
  FormContainer,
  Main,
  Title,
} from '../../components/UI/Forms/Form.styled';
import { Field, ShowPassword } from '../../components/UI/Forms/Field.styled';
//Simport firebase from '../../firebase';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/auth/actions';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootState';
import { DefaultButton } from '../../components/UI/Buttons/Buttons.styled';
import styled from 'styled-components';

const SubmitButton = styled(DefaultButton)`
  margin: 0;
  margin-top: 1rem;
`;

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const selectAuthStatus = (state: RootState) => state.auth.loggedIn;
  const isLoggedIn = useSelector(selectAuthStatus);
  let { from } = (location.state as any) || { from: { pathname: '/' } };

  useEffect(() => {
    if (isLoggedIn) history.replace(from);
  }, [isLoggedIn]);

  const emailChangeHandler = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  };
  const passwordChangeHandler = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(actions.authUser(email, password, false));
  };

  const handleHidePass = () => {
    setShowPassword(false);
  };
  const handleShowPass = () => {
    setShowPassword(true);
  };

  return (
    <Main>
      <Title>Log in</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Field>
            <input
              type="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={emailChangeHandler}
            />
            <label htmlFor="email">Email</label>
          </Field>
          <Field>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder=" "
              value={password}
              onChange={passwordChangeHandler}
            />
            <label htmlFor="password">Password</label>
            <ShowPassword
              className="toggle-password"
              onMouseEnter={handleShowPass}
              onMouseLeave={handleHidePass}
            >
              {showPassword ? '🧐' : '👁️'}
            </ShowPassword>
          </Field>
          <SubmitButton color="white" backgroundColor="#39b4ed" type="submit">
            Submit
          </SubmitButton>
        </Form>
      </FormContainer>
    </Main>
  );
};

export default Login;
