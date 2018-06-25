import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Button, Card, TextField } from '@material-ui/core/umd/material-ui.production.min';

class ActorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      bio: props.bio,
    };
  }

  componentWillUnmount() {
    this.save();
  }

  onNameChange = e => this.setState({ name: e.target.value });

  onBioChange = e => this.setState({ bio: e.target.value });

  save = () => {
    const { id, name, bio } = this.state;
    if (this.props.id) {
      this.props.actions.update(id, name, bio);
    } else {
      const newId = uuid();
      this.props.actions.create(newId, name, bio);
    }
  };

  render() {
    return <form>
      <Card>
        <TextField
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.onNameChange}
            margin="normal" />
        <br />
        <TextField
            id="bio"
            label="Bio"
            value={this.state.bio}
            onChange={this.onBioChange}
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

ActorInput.propTypes = {
  actions: PropTypes.shape({
    create: PropTypes.func,
    update: PropTypes.func,
  }),
  bio: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default ActorInput;
