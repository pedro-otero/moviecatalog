import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="d-flex flex-row flex-md-column justify-content-center justify-content-md-start">
    <p className="pr-3 pr-md-0"><Link to="/movies">Movies</Link></p>
    <p className="pr-3 pr-md-0"><Link to="/actors">Actors</Link></p>
    <p className="pr-3 pr-md-0"><Link to="/genres">Genres</Link></p>
  </div>
);

export default Navigation;
