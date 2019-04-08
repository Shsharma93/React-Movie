import React from 'react';
import classes from './MovieInfoBar.module.css';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../../helpers';

const movieInfoBar = props => {
  return (
    <div className={classes.RmdbMovieInfoBar}>
      <div className={classes.RmdbMovieInfoBarContent}>
        <div className={classes.RmdbMovieInfoBarContentCol}>
          <FontAwesome className={classes.FaTime} name='clock-o' size='2x' />
          <span className={classes.RmdbMovieInfoBarInfo}>
            Running time: {calcTime(props.time)}
          </span>
        </div>
        <div className={classes.RmdbMovieInfoBarContentCol}>
          <FontAwesome className={classes.FaBudget} name='money' size='2x' />
          <span className={classes.RmdbMovieInfoBarInfo}>
            Budget: {convertMoney(props.budget)}
          </span>
        </div>
        <div className={classes.RmdbMovieInfoBarContentCol}>
          <FontAwesome className={classes.FaRevenue} name='ticket' size='2x' />
          <span className={classes.RmdbMovieInfoBarInfo}>
            Revenue: {convertMoney(props.revenue)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default movieInfoBar;
