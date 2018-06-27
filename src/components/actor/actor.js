import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditButton from '../edit-button/edit-button';

export const Actor = ({
  id, name, bio, movies,
}) => (
  <div>
    <h2>{name}</h2>
    <p>{bio}</p>
    {movies.length > 0 && <Fragment>
      <p><strong>Movies:</strong></p>
      {movies.map(({ movieId, title }) => (
        <p key={`movie-item-${movieId}`}>
          <Link to={`/movies/${movieId}`}>{title}</Link>
        </p>
      ))}
    </Fragment>}
    <EditButton path={`/edit/actor/${id}`} />
  </div>
);

Actor.propTypes = {
  bio: PropTypes.string,
  id: PropTypes.string,
  movies: PropTypes.array,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = ({ actors, movies }, { id }) => ({
  name: actors[id].name,
  bio: actors[id].bio,
  movies: Object.entries(movies)
    .filter(([_, { cast }]) => cast.includes(id))
    .map(([movieId, { title }]) => ({ movieId, title })),
});

export default connect(mapStateToProps)(Actor);
