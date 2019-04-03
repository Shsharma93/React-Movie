import React from 'react';
import classes from './FourColGrid.module.css';

const fourColGrid = props => {
  return (
    <div className={classes.RmdbGrid}>
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className={classes.RmdbGridContent} />
    </div>
  );
};

export default fourColGrid;
