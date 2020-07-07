import React, { FC, useState, useRef } from 'react';
import {
  Field,
  ShowPassword,
  StyledList,
} from '../../components/UI/Forms/Field.styled';
import {
  Form,
  Main,
  Title,
  FormContainer,
} from '../../components/UI/Forms/Form.styled';
import { Strength } from '../../components/UI/Forms/Strength.styled';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/auth/actions';
import { DefaultButton } from '../../components/UI/Buttons/Buttons.styled';
import { RootState } from '../../store/rootState';

const LowerFormContainer = styled(FormContainer)`
  top: 40%;
`;

const SubmitButton = styled(DefaultButton)`
  margin: 0;
  margin-top: 1rem;
`;

const Signup: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const validations = useRef<any[]>([]);
  const [strength, setStrength] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();
  const selectLoggedIn = (state: RootState) => state.auth.loggedIn;
  const isLoggedIn = useSelector(selectLoggedIn);

  if (isLoggedIn || localStorage.getItem('isLoggedIn') === 'true')
    return <Redirect to="/home" />;

  function validatePassword(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const password = target.value;
    validations.current = [
      password.length >= 6,
      password.search(/[A-Z]/) > -1,
      password.search(/[0-9]/) > -1,
      password.search(/[$&+,:;=?@#]/) > -1,
    ];
    const currStrength = validations.current.reduce((acc, cur) => acc + cur, 0);
    setStrength(currStrength);
    setPassword(password);
  }

  const emailChangeHandler = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  };

  const Password2ChangeHandler = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setPassword2(target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password !== password2) {
      alert('passwords do not match');
      return;
    }
    dispatch(actions.authUser(email, password, true));
  };

  return (
    <Main>
      <Title>Sign up</Title>
      <LowerFormContainer>
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
              onChange={validatePassword}
            />
            <label htmlFor="password">Password</label>
            <ShowPassword
              className="toggle-password"
              onMouseEnter={() => setShowPassword(true)}
              onMouseLeave={() => setShowPassword(false)}
            >
              {showPassword ? '🧐' : '👁️'}
            </ShowPassword>
          </Field>

          <Field>
            <input
              type={showPassword2 ? 'text' : 'password'}
              placeholder=" "
              value={password2}
              onChange={Password2ChangeHandler}
            />
            <label htmlFor="password">Confirm password</label>
            <ShowPassword
              className="toggle-password"
              onMouseEnter={() => setShowPassword2(true)}
              onMouseLeave={() => setShowPassword2(false)}
            >
              {showPassword2 ? '🧐' : '👁️'}
            </ShowPassword>
          </Field>

          <Strength strength={strength}>
            <span />
            <span />
            <span />
            <span />
          </Strength>
          <p style={{ marginTop: '1rem', fontSize: '1.3rem' }}>
            already signed up?{' '}
            <Link to="/login">
              <strong>Go to login.</strong>
            </Link>
          </p>
          <StyledList>
            <li>
              {' '}
              {validations.current[0] ? '✔️' : '❌'} must be at least 6
              characters
            </li>
            <li>
              {' '}
              {validations.current[1] ? '✔️' : '❌'} must contain a capital
              letter
            </li>
            <li>
              {' '}
              {validations.current[2] ? '✔️' : '❌'} must contain a number
            </li>
            <li>
              {' '}
              {validations.current[3] ? '✔️' : '❌'} must contain one of
              $&+,:;=?@#
            </li>
          </StyledList>
          <SubmitButton color="white" backgroundColor="#39b4ed" type="submit">
            Submit
          </SubmitButton>
        </Form>
      </LowerFormContainer>
    </Main>
  );
};

export default Signup;
