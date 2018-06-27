import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditButton from '../edit-button/edit-button';

export const Actor = ({ id, name, bio }) => (
  <div>
    <h2>{name}</h2>
    <p>{bio}</p>
    <EditButton path={`/edit/actor/${id}`} />
  </div>
);

Actor.propTypes = {
  bio: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = ({ actors }, { id }) => ({
  name: actors[id].name,
  bio: actors[id].bio,
});

export default connect(mapStateToProps)(Actor);
