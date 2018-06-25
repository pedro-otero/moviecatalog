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
    console.log('enter');
    if (e.keyCode == 13) {
      this.setState({
        genres: [...this.state.genres, this.state.genre],
        genre: '',
      });
    }
  };

  save = () => {
    const {
      id, title, synopsis, genres,
    } = this.state;
    if (this.props.id) {
      this.props.actions.update(id, title, synopsis, genres);
    } else {
      const newId = uuid();
      this.props.actions.create(newId, title, synopsis, genres);
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
  genres: PropTypes.array,
  id: PropTypes.string,
  synopsis: PropTypes.string,
  title: PropTypes.string,
};

export default MovieInput;
