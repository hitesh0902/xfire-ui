import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import XFTextField from '../../components/Core/XFTextField';
import XFButton from '../../components/Core/XFButton';

const LoginRoute = () => {
  const history = useHistory();

  let [userId, setUserId] = useState('');
  let [password, setPassword] = useState('');

  const logMeIn = () => {
    axios
      .post('https://localhost:44362/api/Auth/login', {
        LoginId: userId,
        Password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((msg) => console.log(msg));
  };

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='w-full max-w-xs p-4 border border-black'>
        <h1 className='text-4xl mb-3'>X-Fire Login</h1>
        <div className='space-y-2'>
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
          <XFButton onClick={logMeIn}>LOG-IN</XFButton>
        </div>

        <div className='flex justify-center space-x-2'>
          <XFButton onClick={() => history.push('/auth/register')}>
            Register
          </XFButton>
          <XFButton onClick={() => history.push('/auth/forget')}>
            Forget
          </XFButton>
        </div>
      </div>
    </div>
  );
};

export default LoginRoute;
