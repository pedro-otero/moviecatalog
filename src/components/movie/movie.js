import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title/title';

const Movie = ({
  title, synopsis, genres, cast,
}) => (
  <div>
    <Title value={title} />
    {genres.map(genre => (
      <span
          key={`genre-${genre}`}>
        {`"${genre}"`}
      </span>))}
    <p>{synopsis}</p>
    <p>
      <strong>Starring: </strong>
      {cast.join(', ')}
    </p>
  </div>
);

Movie.propTypes = {
  cast: PropTypes.array,
  genres: PropTypes.array,
  synopsis: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Movie;
