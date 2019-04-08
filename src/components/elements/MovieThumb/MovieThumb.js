import React from 'react';
import classes from './MovieThumb.module.css';
import { Link } from 'react-router-dom';

const movieThumb = props => {
  return (
    <div className={classes.RmdbMovieThumb}>
      {props.clickable ? (
        <Link
          to={{
            pathname: `/${props.movieId}`,
            movieName: `${props.movieName}`
          }}
        >
          <img src={props.img} alt='moviethumb' />
        </Link>
      ) : (
        <img src={props.img} alt='moviethumb' />
      )}
    </div>
  );
};

export default movieThumb;
