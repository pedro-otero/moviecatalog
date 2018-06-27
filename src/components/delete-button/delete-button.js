import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ action }) => (
  <button
      type="button"
      className="btn btn-danger"
      onClick={action}>
      Delete
    </button>
);

DeleteButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default DeleteButton;
