import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from '../views/Home';
import Files from '../views/Files';
import Listings from '../views/Listings';
import Clients from '../views/Clients';
import Settings from '../views/Settings';

export default function Routes () {
  return (
    <div style={{marginTop: '20px', width: '100%', marginRight: '40px'}}>
      <Switch>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
        <Route path='/listings'>
          <Listings />
        </Route>
        <Route path='/files'>
          <Files />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}