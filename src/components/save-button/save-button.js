import React from 'react';
import PropTypes from 'prop-types';

const SaveButton = ({ onClick }) => (
  <button
      type="button"
      className="btn btn-primary"
      onClick={onClick}>
      Save
    </button>
);

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;
