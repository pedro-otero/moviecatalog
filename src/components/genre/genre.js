import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ name, onClick }) => (
  <span
      className="badge badge-pill badge-info"
      onClick={onClick}>
    {name}
  </span>
);

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Genre;
