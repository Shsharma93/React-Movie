import React, { Component } from 'react';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import classes from './Home.module.css';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import NoImage from '../../assets/images/no_image.jpg';
import Filter from '../elements/Filter/Filter';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from '../../config';

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: '',
    headerTitle: 'Popular Movies'
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  loadMoreItem = () => {
    let endpoint;
    this.setState({ loading: true });
    if (this.state.searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      });
  };

  searchItems = searchTerm => {
    let endpoint, searchTitle;
    if (searchTerm !== '') {
      searchTitle = 'Search Results';
    } else {
      searchTitle = 'Popular Movies';
    }
    this.setState({
      movies: [],
      searchTerm: searchTerm,
      loading: true,
      headerTitle: searchTitle
    });
    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  };

  clearState = title => {
    this.setState({
      movies: [],
      loading: true,
      currentPage: 0,
      totalPages: 0,
      headerTitle: title,
      heroImage: null
    });
  };

  popularityHandler = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.clearState('Popular Movies');
    this.fetchItems(endpoint);
  };

  topratedHandler = () => {
    const endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    this.clearState('Top Rated Movies');
    this.fetchItems(endpoint);
  };

  upcomingHandler = () => {
    const endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    this.clearState('Upcoming Movies');
    this.fetchItems(endpoint);
  };

  render() {
    return (
      <div className={classes.RmdbHome}>
        {this.state.heroImage ? (
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${
                this.state.heroImage.backdrop_path
              }`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
            />
            <SearchBar search={this.searchItems} />
          </div>
        ) : null}
        <Filter
          popularity={this.popularityHandler}
          toprated={this.topratedHandler}
          upcoming={this.upcomingHandler}
        />
        <div className={classes.RmdbHomeGrid}>
          <FourColGrid
            header={this.state.headerTitle}
            loading={this.state.loading}
          >
            {this.state.movies.map((element, i) => {
              return (
                <MovieThumb
                  key={i}
                  clickable={true}
                  img={
                    element.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${element.poster_path}`
                      : NoImage
                  }
                  movieId={element.id}
                  movieName={element.original_title}
                />
              );
            })}
          </FourColGrid>
        </div>
        {this.state.loading ? <Spinner /> : null}
        {this.state.currentPage < this.state.totalPages &&
        !this.state.loading ? (
          <LoadMoreBtn text='Load More' click={this.loadMoreItem} />
        ) : null}
      </div>
    );
  }
}

export default Home;
