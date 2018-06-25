import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Button, Card, Chip, TextField } from '@material-ui/core/umd/material-ui.production.min';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      synopsis: props.synopsis,
      genres: props.genres,
      genre: '',
      actors: Object
        .entries(props.actors)
        .map(([key, actor]) =>
          Object.assign({}, actor, { selected: false, id: key })),
    };
  }

  componentWillUnmount() {
    this.save();
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
    if (this.props.id) {
      this.props.actions.update(id, title, synopsis, genres, selectedActors);
    } else {
      const newId = uuid();
      this.props.actions.create(newId, title, synopsis, genres, selectedActors);
    }
  };

  render() {
    const { enterGenre } = this;
    return <form>
      <Card>
        <TextField
            id="title"
            label="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
            margin="normal" />
        <br />
        {this.state.genres.map(genre => (
          <Chip
              key={`genre-${genre}`}
              label={genre}
              onDelete={this.deleteGenre(genre)} />
        ))}
        <TextField
            id="genre"
            label="Add genre"
            value={this.state.genre}
            onChange={this.onGenreChange}
            inputProps={{
              onKeyDown: enterGenre,
            }}
            margin="normal" />
        <br />
        <TextField
            id="synopsis"
            label="Synopsis"
            value={this.state.synopsis}
            onChange={this.onSynopsisChange}
            margin="normal"
            multiline />
        <br />
        {this.state.actors.map((actor, i) => (
          <Button
              key={`actor-${actor.name}`}
              variant="contained"
              color={actor.selected ? 'secondary' : 'default'}
              onClick={this.selectActor(i)}>
            {actor.name}
          </Button>
        ))}
        <br />
        <Button
            variant="contained"
            color="primary"
            onClick={this.save}>
          Save
        </Button>
      </Card>
    </form>;
  }
}

MovieInput.propTypes = {
  actions: PropTypes.shape({
    create: PropTypes.func,
    update: PropTypes.func,
  }),
  actors: PropTypes.object,
  genres: PropTypes.array,
  id: PropTypes.string,
  synopsis: PropTypes.string,
  title: PropTypes.string,
};

export default MovieInput;
