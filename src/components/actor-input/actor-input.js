import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/es/Card/Card';
import TextField from '@material-ui/core/es/TextField/TextField';
import Button from '@material-ui/core/es/Button/Button';

class ActorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      bio: props.bio,
    };
  }

  onNameChange = name => this.setState({ name });

  onBioChange = bio => this.setState({ bio });

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
            color="primary">
          Save
        </Button>
      </Card>
    </form>;
  }
}

ActorInput.propTypes = {
  bio: PropTypes.string,
  name: PropTypes.string,
};

export default ActorInput;
