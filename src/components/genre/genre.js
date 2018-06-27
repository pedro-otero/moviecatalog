import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ name }) => (
  <span className="badge badge-pill badge-info">{name}</span>
);

Genre.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Genre;
