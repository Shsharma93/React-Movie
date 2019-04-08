import React, { Fragment } from 'react';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../elements/NotFound/NotFound';
import Movie from '../Movie/Movie';

const app = props => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/:movieId' component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default app;
