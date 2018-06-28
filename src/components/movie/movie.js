import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Genre from '../genre/genre';
import EditButton from '../edit-button/edit-button';
import './movie.css';

export const Movie = ({
  id, title, synopsis, genres, cast,
}) => (
  <div>
    <h2>{title}</h2>
    {genres.map(genre => <Genre key={`genre-${genre}`} name={genre} />)}
    <br />
    <br />
    <p>{synopsis}</p>
    <p>
      <strong>Starring: </strong>
      {cast.map(({ actorId, name }) => (
        <Link
            className="movie-actor-item"
            key={`item-actor-${actorId}`}
            to={`/actors/${actorId}`}>
          <span>{name}</span>
        </Link>))}
    </p>
    <EditButton path={`/edit/movie/${id}`} />
  </div>
);

Movie.propTypes = {
  cast: PropTypes.array,
  genres: PropTypes.array,
  id: PropTypes.string,
  synopsis: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = ({ movies, actors }, { id }) => ({
  ...Object.assign({}, movies[id], {
    cast: movies[id].cast.map(actorId => ({ actorId, name: actors[actorId].name })),
  }),
});

export default connect(mapStateToProps)(Movie);
