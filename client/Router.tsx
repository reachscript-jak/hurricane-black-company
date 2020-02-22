import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="/detail" children={<Detail />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
