import React from 'react';
import MovieLogo from '../../../assets/images/reactMovie_logo.png';
import TmdbLogo from '../../../assets/images/tmdb_logo.png';
import classes from './Header.module.css';

const header = () => {
  return (
    <div className={classes.RmdbHeader}>
      <div className={classes.RmdbHeaderContent}>
        <img className={classes.RmdbLogo} src={MovieLogo} alt='ReactMovie' />
        <img className={classes.RmdbTmdbLogo} src={TmdbLogo} alt='TmdbLogo' />
      </div>
    </div>
  );
};

export default header;
