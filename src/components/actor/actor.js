import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/es/Card/Card';
import Typography from '@material-ui/core/es/Typography/Typography';
import Title from '../title/title';

const Actor = ({ name, bio }) => (
  <Card>
    <Title value={name} />
    <Typography gutterBottom>{bio}</Typography>
  </Card>
);

Actor.propTypes = {
  bio: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Actor;
