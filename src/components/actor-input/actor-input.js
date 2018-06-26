import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { addActor } from '../../redux/actors';

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
      <label htmlFor="name">Name</label>
      <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.onNameChange} />
      <br />
      <label htmlFor="bio">Bio</label>
      <input
          id="bio"
          type="text"
          value={this.state.bio}
          onChange={this.onBioChange}
          margin="normal" />
      <br />
      <button
          type="button"
          onClick={this.save}>
          Save
        </button>
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

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  actions: {
    create: (id, name, bio) => dispatch(addActor(id, name, bio)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActorInput);
