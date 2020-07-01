import React, { FC, useState, useRef } from 'react';
import {
  Field,
  ShowPassword,
  StyledList,
} from '../../components/UI/Forms/Field.styled';
import { Form } from '../../components/UI/Forms/Form.styled';
import { Strength } from '../../components/UI/Forms/Strength.styled';
//import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/auth/actions';

const Signup: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const validations = useRef<any[]>([]);
  const [strength, setStrength] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function validatePassword(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const password = target.value;
    validations.current = [
      password.length >= 5,
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(actions.authUser(email, password, true));
  };

  console.log('SIGN UP');

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Field>
          <input
            type="email"
            name="email"
            className="input"
            placeholder=" "
            value={email}
            onChange={emailChangeHandler}
          />
          <label htmlFor="email">Email</label>
        </Field>

        <Field>
          <input
            type={showPassword ? 'text' : 'password'}
            className="input"
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
            {showPassword ? '🙈' : '👁️'}
          </ShowPassword>
        </Field>

        <Strength strength={strength}>
          <span />
          <span />
          <span />
          <span />
        </Strength>
        <p>
          already signed up?{' '}
          <Link to="/login">
            <strong>Go to login.</strong>
          </Link>
        </p>
        <StyledList>
          <li>
            {' '}
            {validations.current[0] ? '✔️' : '❌'} must be at least 5 characters
          </li>
          <li>
            {' '}
            {validations.current[1] ? '✔️' : '❌'} must contain a capital letter
          </li>
          <li> {validations.current[2] ? '✔️' : '❌'} must contain a number</li>
          <li>
            {' '}
            {validations.current[3] ? '✔️' : '❌'} must contain one of
            $&+,:;=?@#
          </li>
        </StyledList>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Signup;
