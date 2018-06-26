import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title/title';

const Actor = ({ name, bio }) => (
  <div>
    <Title value={name} />
    <p>{bio}</p>
  </div>
);

Actor.propTypes = {
  bio: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Actor;
