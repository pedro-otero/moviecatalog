import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ value }) => (
  <h4>{value}</h4>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
