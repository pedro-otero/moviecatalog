import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actor from '../actor/actor';
import DeleteButton from '../delete-button/delete-button';
import { removeActor } from '../../redux/actors';

export const ActorList = ({ actors, remove }) => (
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
    <DeleteButton action={() => remove(id)} />
  </li>
      ))}
    <br />
    <Link
        to="/add/actor"
        className="btn btn-primary">
      Add
    </Link>
  </ul>
);

ActorList.propTypes = {
  actors: PropTypes.array,
  remove: PropTypes.func,
};

const mapStateToProps = ({ actors }) => ({
  actors: Object.entries(actors).map(([id, actor]) => Object.assign({}, actor, { id })),
});

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeActor(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActorList);
