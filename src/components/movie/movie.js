import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title/title';
import Genre from '../genre/genre';

const Movie = ({
  title, synopsis, genres, cast,
}) => (
  <div>
    <Title value={title} />
    {genres.map(genre => (
      <Genre
          key={`genre-${genre}`}
          name={genre} />))}
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
