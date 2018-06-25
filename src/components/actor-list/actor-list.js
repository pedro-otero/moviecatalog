import React from 'react';
import PropTypes from 'prop-types';
import Actor from '../actor/actor';

const ActorList = ({ actors }) => (
  <div>
    {actors.map(({
name, bio,
}) => (
  <Actor
      key={`list-actor-${name}`}
      name={name}
      bio={bio}
        />
      ))}
  </div>
);

ActorList.propTypes = {
  actors: PropTypes.array,
};

export default ActorList;
