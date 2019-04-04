import React from 'react';
import classes from './FourColGrid.module.css';

const fourColGrid = props => {
  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return (
        <div key={i} className={classes.RmdbGridElement}>
          {element}
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className={classes.RmdbGrid}>
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className={classes.RmdbGridContent}>{renderElements()}</div>
    </div>
  );
};

export default fourColGrid;
