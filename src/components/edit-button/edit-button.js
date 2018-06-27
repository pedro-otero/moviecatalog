import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EditButton = ({ path }) => (
  <Link
      to={path}
      className="btn btn-primary">
      Edit
    </Link>
);

EditButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default EditButton;
