import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core/umd/material-ui.production.min';
import Actor from '../actor/actor';

const ActorList = ({ actors }) => (
  <div>
    {actors.map(({
id, name, bio,
}) => (
  <Link
      key={`list-actor-${name}`}
      to={`/actors/${id}`}>
    <Actor
        name={name}
        bio={bio}
        />
  </Link>
      ))}
    <Link to="/actors/add">
      <Button
          variant="fab"
          color="primary" >
        <AddIcon />
      </Button>
    </Link>
  </div>
);

ActorList.propTypes = {
  actors: PropTypes.array,
};

const mapStateToProps = ({ actors }) => ({
  actors: Object.entries(actors).map(([id, actor]) => Object.assign({}, actor, { id })),
});

export default connect(mapStateToProps)(ActorList);
