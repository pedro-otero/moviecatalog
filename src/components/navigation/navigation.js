import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = props => (
  <div>
    <p><Link to="/movies">Movies</Link></p>
    <p><Link to="/genres">Genres</Link></p>
    <p><Link to="/actors">Actors</Link></p>
  </div>
);

Navigation.propTypes = {};

export default Navigation;
