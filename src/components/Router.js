import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Photo from './Pages/Photo';

export default function() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/photo' component={Photo} />
    </Switch>
  )
}