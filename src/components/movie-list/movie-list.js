import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Movie from '../movie/movie';
import { removeMovie } from '../../redux/movies';
import DeleteButton from '../delete-button/delete-button';
import AddButton from '../add-button/add-button';

export const MovieList = ({ movies, remove }) => (
  <Fragment>
    <div className="container">
      {movies.map(({ id, title }) => (
        <div
            key={`list-movie-${title}`}
            className="row pb-2 pt-2 border-bottom">
          <Link
              to={`/movies/${id}`}
              key={`list-movie-${title}`}
              className="col col-11">
            {title}
          </Link>
          <DeleteButton
              className="col col-1"
              action={() => remove(id)} />
        </div>
      ))}
    </div>
    <br />
    <AddButton path="/add/movie" />
  </Fragment>
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
