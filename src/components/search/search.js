import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  static getDerivedStateFromProps({ filter, movies }) {
    const FILTER = filter.toUpperCase();
    return {
      movies: movies.filter(({
        title, synopsis = '', cast = [], genres = [],
      }) =>
        title.toUpperCase().includes(FILTER) ||
        synopsis.toUpperCase().includes(FILTER) ||
        cast.map(c => c.toUpperCase()).includes(FILTER) ||
        genres.map(g => g.toUpperCase()).includes(FILTER)),
    };
  }

  render() {
    return (
      <div></div>
    );
  }
}

Search.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Search;
