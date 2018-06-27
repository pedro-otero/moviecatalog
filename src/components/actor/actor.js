import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Title from '../title/title';
import Truncate from '../truncate/truncate';

export const Actor = ({ id, name, bio }) => (
  <div>
    <Title value={name} />
    <Truncate value={bio} />
    <Link
        to={`/edit/actor/${id}`}
        className="btn btn-primary">
      Edit
    </Link>
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
