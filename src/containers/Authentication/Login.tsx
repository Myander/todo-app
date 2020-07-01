import React, { FC, useState, useEffect } from 'react';
import { Form } from '../../components/UI/Forms/Form.styled';
import { Field, ShowPassword } from '../../components/UI/Forms/Field.styled';
//Simport firebase from '../../firebase';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/auth/actions';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootState';

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
            onChange={passwordChangeHandler}
          />
          <label htmlFor="password">Password</label>
          <ShowPassword
            className="toggle-password"
            onMouseEnter={handleShowPass}
            onMouseLeave={handleHidePass}
          >
            {showPassword ? '🙈' : '👁️'}
          </ShowPassword>
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Login;
