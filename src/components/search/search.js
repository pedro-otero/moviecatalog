import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Search extends React.Component {
  static getDerivedStateFromProps({ filter, movies }) {
    const FILTER = filter.toUpperCase();
    return {
      byTitle: movies.filter(({ title }) =>
        title.toUpperCase().includes(FILTER)),
      bySynopsis: movies.filter(({ synopsis = '' }) =>
        synopsis.toUpperCase().includes(FILTER)),
      byCast: movies.filter(({ cast = [] }) =>
        cast.map(c => c.toUpperCase()).find(c => c.includes(FILTER))),
      byGenre: movies.filter(({ genres = [] }) =>
        genres.map(g => g.toUpperCase()).find(c => c.includes(FILTER))),
    };
  }

  renderMovies(header, movies) {
    return <Fragment>
      <h4>{header}</h4>
      <ul className="list-group">
        {movies.map(({ id, title }) => (
          <li
              className="list-group-item"
              key={`list-movie-${title}`}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>;
  }

  render() {
    const { filter } = this.props;
    const {
      byTitle, bySynopsis, byGenre, byCast,
    } = this.state;
    return (
      <div>
        {byTitle.length > 0 && this.renderMovies(`Titles containing "${filter}"`, byTitle)}
        {bySynopsis.length > 0 && this.renderMovies(`About "${filter}"`, bySynopsis)}
        {byGenre.length > 0 && this.renderMovies(`Genre: "${filter}"`, byGenre)}
        {byCast.length > 0 && this.renderMovies(`Starring "${filter}"`, byCast)}
      </div>
    );
  }
}

Search.propTypes = {
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = ({ movies, actors }) => ({
  movies: Object.entries(movies)
    .map(([id, movie]) => ({
      id,
      ...Object.assign({}, movie, {
        cast: movie.cast.map(actorId => actors[actorId].name),
      }),
    })),
});

export default connect(mapStateToProps)(Search);
