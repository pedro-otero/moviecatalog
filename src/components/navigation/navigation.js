import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/es/Drawer/Drawer';
import Typography from '@material-ui/core/es/Typography/Typography';

const Navigation = props => (
  <Drawer
      open
      variant="persistent">
    <Typography>Movies</Typography>
    <Typography>Genres</Typography>
    <Typography>Actors</Typography>
  </Drawer>
);

Navigation.propTypes = {};

export default Navigation;
