import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Movie from '../movie/movie';

export const MovieList = ({ movies }) => (
  <div>
    {movies.map(({
title, synopsis, genres, cast,
}) => (
  <Movie
      key={`list-movie-${title}`}
      title={title}
      synopsis={synopsis}
      genres={genres}
      cast={cast}
        />
      ))}
    <Link to="/movies/add">Add</Link>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array,
};

const mapStateToProps = ({ movies }) => ({
  movies: Object.entries(movies).map(([id, movie]) => Object.assign({}, movie, { id })),
});

export default connect(mapStateToProps)(MovieList);
