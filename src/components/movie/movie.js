import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Title from '../title/title';
import Genre from '../genre/genre';
import Truncate from '../truncate/truncate';

const Movie = ({
  id, title, synopsis, genres, cast,
}) => (
  <div>
    <Title value={title} />
    {genres.map(genre => (
      <Genre
          key={`genre-${genre}`}
          name={genre} />))}
    <Truncate value={synopsis} />
    <p>
      <strong>Starring: </strong>
      {cast.join(', ')}
    </p>
    <Link
        to={`/edit/movie/${id}`}
        className="btn btn-primary">
      Edit
    </Link>
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
    cast: movies[id].cast.map(actorId => actors[actorId].name),
  }),
});

export default connect(mapStateToProps)(Movie);
