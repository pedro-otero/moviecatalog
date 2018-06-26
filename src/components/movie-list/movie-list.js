import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Movie from '../movie/movie';

export const MovieList = ({ movies }) => (
  <div>
    {movies.map(({
id, title, synopsis, genres, cast,
}) => (
  <Link
      to={`/movies/${id}`}
      key={`list-movie-${title}`}>
    <Movie
        title={title}
        synopsis={synopsis}
        genres={genres}
        cast={cast}
        />
  </Link>
      ))}
    <Link to="/add/movie">Add</Link>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array,
};

const mapStateToProps = ({ movies, actors }) => ({
  movies: Object.entries(movies)
    .map(([movieId, movie]) => Object.assign({ id: movieId }, movie, {
      cast: movie.cast.map(actorId => actors[actorId].name),
    })),
});

export default connect(mapStateToProps)(MovieList);
