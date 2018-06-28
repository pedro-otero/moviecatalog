import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const GenreList = ({ genres }) => (
  Object.entries(genres).map(([genre, movies]) => (
    <div key={`genre-item-${genre}`}>
      <h4>{genre}</h4>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={`/movie-item-${id}`}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>))}
      </ul>
    </div>
  ))
);

GenreList.propTypes = {
  genres: PropTypes.object,
};

const mapStateToProps = ({ movies }) => ({
  genres: Object.entries(movies)
    .reduce((all, [id, movie]) => [
      ...all,
      ...movie.genres.filter(genre => !all.includes(genre)),
    ], [])
    .reduce((all, genre) =>
      Object.assign({}, all, {
        [genre]: Object.entries(movies)
          .filter(([_, movie]) => movie.genres.includes(genre))
          .map(([id, movie]) => Object.assign({ id }, movie)),
      }), {}),
});

export default connect(mapStateToProps)(GenreList);
