import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExampleRoute from './routes/ExampleRoute';
import LoginRoute from './routes/auth/LoginRoute';
import RegisterRoute from './routes/auth/RegisterRoute';
import ForgetPasswordRoute from './routes/auth/ForgetPasswordRoute';
import Error404Route from './routes/Error404Route';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ExampleRoute} />
          <Route exact path='/auth/login' component={LoginRoute} />
          <Route exact path='/auth/register' component={RegisterRoute} />
          <Route exact path='/auth/forget' component={ForgetPasswordRoute} />
          <Route path='/' component={Error404Route} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
