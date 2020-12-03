import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TimerView from '../views/TimerView';

export default function Routes() {
  return <Switch>
      {/* <Route exact path='/' component={HomeView}/> */}
      <Route
      exact
      path='/timer'
      component={() => <TimerView /> }
      />
  </Switch>;
}
