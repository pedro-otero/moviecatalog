import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Movie from '../movie/movie';
import { removeMovie } from '../../redux/movies';
import DeleteButton from '../delete-button/delete-button';

export const MovieList = ({ movies, remove }) => (
  <ul className="list-group">
    {movies.map(({
id, title, synopsis, genres, cast,
}) => (
  <li
      className="list-group-item"
      key={`list-movie-${title}`}>
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
    <DeleteButton action={() => remove(id)} />
  </li>
      ))}
    <Link
        to="/add/movie"
        className="btn btn-primary">
      Add
    </Link>
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.array,
  remove: PropTypes.func,
};

const mapStateToProps = ({ movies, actors }) => ({
  movies: Object.entries(movies)
    .map(([movieId, movie]) => Object.assign({ id: movieId }, movie, {
      cast: movie.cast.map(actorId => actors[actorId].name),
    })),
});

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
