import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../movie/movie';

const MovieList = ({ movies }) => (
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
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
