import React from 'react';
import classes from './LoadMoreBtn.module.css';

const loadMoreBtn = props => {
  return (
    <div className={classes.RmdbLoadMoreBtn} onClick={props.click}>
      <p>{props.text}</p>
    </div>
  );
};

export default loadMoreBtn;
