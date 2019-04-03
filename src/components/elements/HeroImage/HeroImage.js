import React from 'react';
import classes from './HeroImage.module.css';

const heroImage = props => {
  return (
    <div
      className={classes.RmdbHeroImage}
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 
      39%, rgba(0,0,0,0)
      41%, rgba(0,0,0,0.65)
      100%), 
      url('${props.image}'), #1c1c1c`
      }}
    >
      <div className={classes.RmdbHeroImageContent}>
        <div className={classes.RmdbHeroImageText}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default heroImage;
