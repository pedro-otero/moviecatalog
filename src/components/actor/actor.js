import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title/title';
import Truncate from '../truncate/truncate';

const Actor = ({ name, bio }) => (
  <div>
    <Title value={name} />
    <Truncate value={bio} />
  </div>
);

Actor.propTypes = {
  bio: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Actor;
