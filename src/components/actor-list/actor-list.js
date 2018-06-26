import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ actors }) => ({
  actors: Object.entries(actors).map(([id, actor]) => Object.assign({}, actor, { id })),
});

export default connect(mapStateToProps)(ActorList);
