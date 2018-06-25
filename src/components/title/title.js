import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/es/Typography/Typography';

const Title = ({ value }) => (
  <Typography
      variant="title"
      gutterBottom>
    {value}
  </Typography>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
