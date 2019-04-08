import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import classes from './MovieInfo.module.css';
import NoImage from '../../../assets/images/no_image.jpg';

const movieInfo = ({ movie, directors }) => {
  return (
    <div
      className={classes.RmdbMovieInfo}
      style={{
        background: movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
          : '#000'
      }}
    >
      <div className={classes.RmdbMovieInfoContent}>
        <div className={classes.RmdbMovieInfoThumb}>
          <MovieThumb
            img={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
          />
        </div>
        <div className={classes.RmdbMovieInfoText}>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className={classes.RmdbRating}>
            <meter
              min='0'
              max='100'
              value='{movie.vote_average * 10}'
              optimum='100'
              low='40'
              high='70'
            />
            <p className={classes.RmdbScore}>{movie.vote_average}</p>
          </div>
          {directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3>}
          {directors.map((element, i) => {
            return (
              <p key={i} className={classes.RmdbDirector}>
                {element.name}
              </p>
            );
          })}
        </div>
        <FontAwesome className={classes.FaFilm} name='film' size='5x' />
      </div>
    </div>
  );
};

export default movieInfo;
