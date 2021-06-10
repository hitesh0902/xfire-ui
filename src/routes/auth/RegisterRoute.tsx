import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import XFTextField from '../../components/Core/XFTextField';
import XFButton from '../../components/Core/XFButton';

const RegisterRoute = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(name, userId, password);
    axios
      .post('https://localhost:44362/api/Auth/register', {
        id: userId,
        password: password,
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
            placeHolder='Enter your First Name'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <XFTextField
            placeHolder='Enter your Last Name'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <XFTextField
            placeHolder='Enter your Alias'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <XFTextField
            placeHolder='Enter your user-id or email-id'
            onChange={(e) => setUserId(e.target.value)}
          />
          <XFTextField
            placeHolder='Enter your password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
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
      </div>
    </form>
  );
};

export default RegisterRoute;
