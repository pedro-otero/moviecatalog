import React from 'react';
import PropTypes from 'prop-types';

const SaveButton = ({ onClick, disabled }) => (
  <button
      type="button"
      className="btn btn-primary"
      disabled={disabled}
      onClick={onClick}>
      Save
    </button>
);

SaveButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;
