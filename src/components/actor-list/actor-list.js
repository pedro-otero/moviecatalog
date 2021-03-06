import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteButton from '../delete-button/delete-button';
import { removeActor } from '../../redux/actors';
import AddButton from '../add-button/add-button';

export const ActorList = ({ actors, remove }) => (
  <Fragment>
    <div className="container">
      {actors.map(({ id, name }) => (
        <div className="row pb-2 pt-2 border-bottom" key={`list-actor-${name}`}>
          <Link to={`/actors/${id}`} className="col col-9 col-md-11">
            {name}
          </Link>
          <DeleteButton className="col col-3 col-md-1" action={() => remove(id)} />
        </div>
      ))}
    </div>
    <br />
    <AddButton path="/add/actor" />
  </Fragment>
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
