import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AddButton = ({ path }) => (
  <Link
      to={path}
      className="btn btn-primary">
      Add
    </Link>
);

AddButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default AddButton;
