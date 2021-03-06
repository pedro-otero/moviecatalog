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
    const {
      id, title, synopsis, genres, actors, cast,
    } = props;
    this.state = {
      id,
      title,
      synopsis,
      genres,
      genre: '',
      actors: this.mapActors(actors, cast),
    };
  }

  mapActors = (actors, cast) => Object
    .entries(actors)
    .map(([key, actor]) =>
      Object.assign({}, actor, {
        id: key,
        selected: cast.includes(key),
      }));

  onChange = key => e => this.setState({ [key]: e.target.value });

  deleteGenre = genre => () => this.setState({
    genres: this.state.genres.filter(g => g !== genre),
  });

  enterGenre = (e) => {
    if (e.keyCode === 13) {
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
    const { actions, history } = this.props;
    const selectedActors = this.getActorIds(actors);
    if (id) {
      actions.update(id, title, synopsis, genres, selectedActors);
    } else {
      const newId = uuid();
      this.setState({ id: newId });
      actions.create(newId, title, synopsis, genres, selectedActors);
    }
    history.push('/movies');
  };

  getActorIds = actors => actors
    .filter(actor => actor.selected)
    .map(actor => actor.id);

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
      {actors.map(({ name, selected }, i) => (
        <Fragment key={`actor-${name}`}>
          <button
              type="button"
              onClick={this.selectActor(i)}
              className={`btn mr-2 mb-2 ${selected ? 'btn-success' : 'btn-light'}`}>
            {name}
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
      <SaveButton disabled={title.length === 0} onClick={this.save} />
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
