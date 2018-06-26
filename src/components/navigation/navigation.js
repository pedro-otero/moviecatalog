import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/es/Drawer/Drawer';
import Typography from '@material-ui/core/es/Typography/Typography';
import { Link } from 'react-router-dom';

const Navigation = props => (
  <Drawer
      open
      variant="persistent">
    <Typography><Link to="/movies">Movies</Link></Typography>
    <Typography>Genres</Typography>
    <Typography><Link to="/actors">Actors</Link></Typography>
  </Drawer>
);

Navigation.propTypes = {};

export default Navigation;
