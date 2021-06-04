import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExampleRoute from './routes/ExampleRoute';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ExampleRoute} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
