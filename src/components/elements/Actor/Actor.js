import React from 'react';
import classes from './Actor.module.css';
import { IMAGE_BASE_URL } from '../../../config';
import NoImage from '../../../assets/images/no_image.jpg';

const actor = props => {
  const POSTER_SIZE = 'w154';

  return (
    <div className={classes.RmdbActor}>
      <img
        src={
          props.actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}`
            : NoImage
        }
        alt='actorthumb'
      />
      <span className={classes.RmdbActorName}>{props.actor.name}</span>
      <span className={classes.RmdbActorCharacter}>
        {props.actor.character}
      </span>
    </div>
  );
};

export default actor;
