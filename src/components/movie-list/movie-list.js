import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core/umd/material-ui.production.min';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Movie from '../movie/movie';
import { connect } from 'react-redux';

export const MovieList = ({ movies }) => (
  <div>
    {movies.map(({
title, synopsis, genres, cast,
}) => (
  <Movie
      key={`list-movie-${title}`}
      title={title}
      synopsis={synopsis}
      genres={genres}
      cast={cast}
        />
      ))}
    <Button
        variant="fab"
        color="primary" >
      <Link to="/movies/add">
        <AddIcon />
      </Link>
    </Button>
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array,
};

const mapStateToProps = ({ movies }) => ({
  movies: Object.entries(movies).map(([id, movie]) => Object.assign({}, movie, { id })),
});

export default connect(mapStateToProps)(MovieList);