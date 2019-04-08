import React from 'react';
import MovieLogo from '../../../assets/images/reactMovie_logo.png';
import TmdbLogo from '../../../assets/images/tmdb_logo.png';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div className={classes.RmdbHeader}>
      <div className={classes.RmdbHeaderContent}>
        <Link to='/'>
          <img className={classes.RmdbLogo} src={MovieLogo} alt='ReactMovie' />
        </Link>
        <img className={classes.RmdbTmdbLogo} src={TmdbLogo} alt='TmdbLogo' />
      </div>
    </div>
  );
};

export default header;
