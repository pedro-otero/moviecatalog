import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const GenreList = ({ genres }) => (
  Object.entries(genres).map(([genre, movies]) => (
    <Fragment key={`genre-item-${genre}`}>
      <h4>{genre}</h4>
      {movies.map(({ id, title }) => (
        <p key={`/movie-item-${id}`}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </p>))}
    </Fragment>
  ))
);

GenreList.propTypes = {
  genres: PropTypes.object,
};

const mapStateToProps = ({ movies }) => ({});

export default connect(mapStateToProps)(GenreList);
