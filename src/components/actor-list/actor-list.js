import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actor from '../actor/actor';

export const ActorList = ({ actors }) => (
  <ul className="list-group">
    {actors.map(({
id, name, bio,
}) => (
  <li
      className="list-group-item"
      key={`list-actor-${name}`}>
    <Link to={`/actors/${id}`}>
      <Actor
          name={name}
          bio={bio} />
    </Link>
  </li>
      ))}
    <br />
    <Link
        to="/add/actor"
        class="btn btn-primary">
      Add
    </Link>
  </ul>
);

ActorList.propTypes = {
  actors: PropTypes.array,
};

const mapStateToProps = ({ actors }) => ({
  actors: Object.entries(actors).map(([id, actor]) => Object.assign({}, actor, { id })),
});

export default connect(mapStateToProps)(ActorList);
