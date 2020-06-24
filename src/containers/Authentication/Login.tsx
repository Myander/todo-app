import React, { FC, useState } from 'react';
import { Form } from '../../components/UI/Forms/Form.styled';
import { Field, ShowPassword } from '../../components/UI/Forms/Field.styled';
//Simport firebase from '../../firebase';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/auth/actions';

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
    //console.log('user', email, password);
    dispatch(actions.authUser(email, password, false));
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
            onMouseEnter={() => setShowPassword(true)}
            onMouseLeave={() => setShowPassword(false)}
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
