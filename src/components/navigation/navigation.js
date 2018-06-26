import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = props => (
  <div>
    <Link to="/movies">Movies</Link>
    <p>Genres</p>
    <Link to="/actors">Actors</Link>
  </div>
);

Navigation.propTypes = {};

export default Navigation;
