import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ value }) => (
  <h2>{value}</h2>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
