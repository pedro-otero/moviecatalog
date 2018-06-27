import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  static getDerivedStateFromProps({ filter, movies }) {
    const FILTER = filter.toUpperCase();
    return {
      byTitle: movies.filter(({ title }) =>
        title.toUpperCase().includes(FILTER)),
      bySynopsis: movies.filter(({ synopsis = '' }) =>
        synopsis.toUpperCase().includes(FILTER)),
      byCast: movies.filter(({ cast = [] }) =>
        cast.map(c => c.toUpperCase()).includes(FILTER)),
      byGenre: movies.filter(({ genres = [] }) =>
        genres.map(g => g.toUpperCase()).includes(FILTER)),
    };
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Search.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Search;
