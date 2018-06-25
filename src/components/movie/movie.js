import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/es/Card/Card';
import Typography from '@material-ui/core/es/Typography/Typography';
import Chip from '@material-ui/core/es/Chip/Chip';
import Title from '../title/title';

const Movie = ({
  title, synopsis, genres, cast,
}) => (
  <Card>
    <Title value={title} />
    {genres.map(genre => (
      <Chip
          key={`genre-${genre}`}
          label={genre} />))}
    <Typography gutterBottom>{synopsis}</Typography>
    <Typography gutterBottom>
      <strong>Starring: </strong>
      {cast.join(', ')}
    </Typography>
  </Card>
);

Movie.propTypes = {
  cast: PropTypes.array,
  genres: PropTypes.array,
  synopsis: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Movie;
