import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ name, onClick }) => {
  const Element = onClick ? 'a' : 'span';
  const additionalProps = onClick ? { href: '#' } : {};
  return <Element
      {...additionalProps}
      className="badge badge-pill badge-info"
      onClick={onClick}>
    {name}
  </Element>;
};

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Genre;
