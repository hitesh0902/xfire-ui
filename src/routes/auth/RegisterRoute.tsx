import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import XFTextField from '../../components/Core/XFTextField';
import XFButton from '../../components/Core/XFButton';

const RegisterRoute = () => {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('passwords do not match');
      return;
    }
    axios
      .post('https://localhost:44362/api/Auth/registerUser', {
        UserAlias: alias,
        UserEmailId: email,
        UserFirstName: firstName,
        UserLastName: lastName,
        UserPassword: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((msg) => console.log(msg));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center justify-center h-screen w-full'
    >
      <div className='p-4 border border-black'>
        <h1 className='text-4xl mb-3'>X-Fire Register</h1>
        <div>
          <XFTextField
            placeHolder='Enter your first name'
            type='text'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <XFTextField
            placeHolder='Enter your last name'
            type='text'
            onChange={(e) => setLastName(e.target.value)}
          />
          <XFTextField
            placeHolder='Enter your alias'
            type='text'
            onChange={(e) => setAlias(e.target.value)}
          />
          <XFTextField
            placeHolder='Enter your email address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <XFTextField
            placeHolder='Enter your password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <XFTextField
            placeHolder='Re-enter your password'
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className='flex justify-center my-3'>
          <XFButton type='submit'>Submit</XFButton>
        </div>

        <div className='flex justify-center'>
          <XFButton onClick={() => history.push('/auth/login')}>
            Go to Login
          </XFButton>
        </div>
        {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
      </div>
    </form>
  );
};

export default RegisterRoute;
