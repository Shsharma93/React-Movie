import React from 'react';
import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';

const navigation = props => {
  return (
    <div className={classes.RmdbNavigation}>
      <div className={classes.RmdbNavigationContent}>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  );
};

export default navigation;
