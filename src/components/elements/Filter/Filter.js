import React from 'react';
import classes from './Filter.module.css';
import FontAwesome from 'react-fontawesome';

const filter = props => {
  return (
    <div className={classes.ButtonDiv}>
      <button className={classes.Button} onClick={props.popularity}>
        <FontAwesome name='bars' className={classes.faBar} />
        Popularity
      </button>
      <button className={classes.Button} onClick={props.toprated}>
        <FontAwesome name='bars' className={classes.faBar} />
        Top Rated
      </button>
      <button className={classes.Button} onClick={props.upcoming}>
        <FontAwesome name='bars' className={classes.faBar} />
        Upcoming
      </button>
    </div>
  );
};

export default filter;
