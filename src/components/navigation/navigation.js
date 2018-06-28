import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <p><Link to="/movies">Movies</Link></p>
    <p><Link to="/genres">Genres</Link></p>
    <p><Link to="/actors">Actors</Link></p>
  </div>
);

export default Navigation;
