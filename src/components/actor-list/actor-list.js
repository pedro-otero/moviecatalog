import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actor from '../actor/actor';
import DeleteButton from '../delete-button/delete-button';
import { removeActor } from '../../redux/actors';
import AddButton from '../add-button/add-button';

export const ActorList = ({ actors, remove }) => (
  <ul className="list-group">
    {actors.map(({ id, name }) => (
      <li
          className="list-group-item"
          key={`list-actor-${name}`}>
        <div className="container">
          <div className="row">
            <Link
                to={`/actors/${id}`}
                className="col col-11">{name}</Link>
            <DeleteButton
                className="col col-1"
                action={() => remove(id)} />
          </div>
        </div>
      </li>
      ))}
    <br />
    <AddButton path="/add/actor" />
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
