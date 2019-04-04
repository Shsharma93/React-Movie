import React, { Component } from 'react';
import classes from './SearchBar.module.css';
import FontAwesome from 'react-fontawesome';

class SearchBar extends Component {
  state = {
    value: ''
  };

  timeout = null;
  searchHandler = event => {
    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.search(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className={classes.RmdbSearchBar}>
        <div className={classes.RmdbSearchBarContent}>
          <FontAwesome
            className={classes.RmdbFaSearch}
            name='search'
            size='2x'
          />
          <input
            type='text'
            className={classes.RmdbSearchBarInput}
            placeholder='search for movies'
            onChange={this.searchHandler}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
