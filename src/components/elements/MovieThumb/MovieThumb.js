import React from 'react';
import classes from './MovieThumb.module.css';

const movieThumb = props => {
  return (
    <div className={classes.RmdbMovieThumb}>
      <img src={props.img} alt='moviethumb' />
    </div>
  );
};

export default movieThumb;
