import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addMovie, updateMovie } from '../../redux/movies';
import Genre from '../genre/genre';
import SaveButton from '../save-button/save-button';

const NoActors = () => (
  <div>
    <small className="form-text text-muted">There are no actors that can be added. </small>
    <Link to="/add/actor">Create one</Link>
  </div>);

export class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      synopsis: props.synopsis,
      genres: props.genres,
      genre: '',
      actors: Object
        .entries(props.actors)
        .map(([key, actor]) =>
          Object.assign({}, actor, {
            id: key,
            selected: (props.cast).includes(key),
          })),
    };
  }

  onChange = key => e => this.setState({ [key]: e.target.value });

  deleteGenre = genre => () => this.setState({
    genres: this.state.genres.filter(g => g !== genre),
  });

  enterGenre = (e) => {
    if (e.keyCode == 13) {
      this.setState({
        genres: [...this.state.genres, this.state.genre],
        genre: '',
      });
    }
  };

  selectActor = i => () => {
    const { actors } = this.state;
    const selectedActor = actors[i];
    const newState = Object.assign([...actors], {
      [i]: Object.assign({}, selectedActor, { selected: !selectedActor.selected }),
    });
    this.setState({
      actors: newState,
    });
  };

  save = () => {
    const {
      id, title, synopsis, genres, actors,
    } = this.state;
    const selectedActors = actors
      .filter(actor => actor.selected)
      .map(actor => actor.id);
    if (id) {
      this.props.actions.update(id, title, synopsis, genres, selectedActors);
    } else {
      const newId = uuid();
      this.setState({ id: newId });
      this.props.actions.create(newId, title, synopsis, genres, selectedActors);
    }
    this.props.history.push('/movies');
  };

  renderGenreControls = (genres, genre) => (
    <div className="form-group">
      <label htmlFor="genre">Genres</label>
      <br />
      {genres.map(genreItem => (
        <Genre
            key={`genre-${genreItem}`}
            name={genreItem}
            onClick={this.deleteGenre(genreItem)} />
      ))}
      <input
          id="genre"
          className="form-control"
          value={genre}
          onChange={this.onChange('genre')}
          onKeyDown={this.enterGenre} />
      <small className="form-text text-muted">Type genre and press Enter</small>
    </div>
  );

  renderActorSelectors = actors => (
    <div className="form-group">
      {actors.map((actor, i) => (
        <Fragment key={`actor-${actor.name}`}>
          <button
              type="button"
              onClick={this.selectActor(i)}
              className={`btn ${actor.selected ? 'btn-success' : 'btn-light'}`}>
            {actor.name}
          </button>
        </Fragment>
      ))}
      <small className="form-text text-muted">Click on actors to select them</small>
    </div>
  );

  render() {
    const {
      title, synopsis, genre, genres, actors,
    } = this.state;

    return <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
            id="title"
            className="form-control"
            type="text"
            value={title}
            onChange={this.onChange('title')} />
      </div>
      {this.renderGenreControls(genres, genre)}
      <div className="form-group">
        <label htmlFor="synopsis">Synopsis</label>
        <textarea
            id="synopsis"
            className="form-control"
            value={synopsis}
            onChange={this.onChange('synopsis')} />
      </div>
      <p>Actors</p>
      {actors.length > 0 && this.renderActorSelectors(actors)}
      {actors.length === 0 && <NoActors />}
      <br />
      <SaveButton onClick={this.save} />
    </form>;
  }
}

MovieInput.propTypes = {
  actions: PropTypes.shape({
    create: PropTypes.func,
    update: PropTypes.func,
  }),
  actors: PropTypes.object,
  cast: PropTypes.array,
  genres: PropTypes.array,
  history: PropTypes.object,
  id: PropTypes.string,
  synopsis: PropTypes.string,
  title: PropTypes.string,
};

MovieInput.defaultProps = {
  actors: {},
  cast: [],
  genres: [],
  synopsis: '',
  title: '',
};

const mapStateToProps = ({ movies, actors }, { id }) => {
  if (id) {
    return { ...movies[id], actors };
  }
  return { id, actors };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    create: (id, title, synopsis, genres, actors) =>
      dispatch(addMovie(id, title, synopsis, genres, actors)),
    update: (id, title, synopsis, genres, actors) =>
      dispatch(updateMovie(id, title, synopsis, genres, actors)),
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieInput));
