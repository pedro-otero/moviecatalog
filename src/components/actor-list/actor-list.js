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
name, bio,
}) => (
  <Actor
      key={`list-actor-${name}`}
      name={name}
      bio={bio}
        />
      ))}
    <Button
        variant="fab"
        color="primary" >
      <Link to="/actors/add">
        <AddIcon />
      </Link>
    </Button>
  </div>
);

ActorList.propTypes = {
  actors: PropTypes.array,
};

const mapStateToProps = ({ actors }) => ({
  actors: Object.entries(actors).map(([id, actor]) => Object.assign({}, actor, { id })),
});

export default connect(mapStateToProps)(ActorList);
