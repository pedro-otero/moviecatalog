import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { addMovie, updateMovie } from '../../redux/movies';
import Genre from '../genre/genre';

export class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      synopsis: props.synopsis,
      genres: props.genres || [],
      genre: '',
      actors: Object
        .entries(props.actors)
        .map(([key, actor]) =>
          Object.assign({}, actor, {
            id: key,
            selected: (props.cast || []).includes(key),
          })),
    };
  }

  onTitleChange = e => this.setState({ title: e.target.value });

  onSynopsisChange = e => this.setState({ synopsis: e.target.value });

  onGenreChange = e => this.setState({ genre: e.target.value });

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
  };

  render() {
    const { enterGenre } = this;
    return <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
            id="title"
            className="form-control"
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genres</label>
        <br />
        {this.state.genres.map(genre => (
          <Genre
              key={`genre-${genre}`}
              name={genre}
              onClick={this.deleteGenre(genre)} />
        ))}
        <input
            id="genre"
            className="form-control"
            value={this.state.genre}
            onChange={this.onGenreChange}
            onKeyDown={enterGenre} />
        <small className="form-text text-muted">Type genre and press Enter</small>
      </div>
      <div className="form-group">
        <label htmlFor="synopsis">Synopsis</label>
        <input
            type="text"
            id="synopsis"
            className="form-control"
            value={this.state.synopsis}
            onChange={this.onSynopsisChange}
            margin="normal" />
      </div>
      <div className="form-group">
        <p>Actors</p>
        {this.state.actors.map((actor, i) => (
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
      <br />
      <button
          type="button"
          className="btn btn-primary"
          onClick={this.save}>
        Save
      </button>
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
  id: PropTypes.string,
  synopsis: PropTypes.string,
  title: PropTypes.string,
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieInput);
