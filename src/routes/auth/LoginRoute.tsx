import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginRoute = () => {
  const history = useHistory();

  return (
    <div>
      <h1 className='text-4xl'>Login Route</h1>
      <button onClick={() => history.push('/auth/register')}>Register</button>
      <button onClick={() => history.push('/auth/forget')}>Forget</button>
    </div>
  );
};

export default LoginRoute;
