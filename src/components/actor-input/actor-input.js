import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addActor, updateActor } from '../../redux/actors';
import SaveButton from '../save-button/save-button';

export class ActorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      bio: props.bio,
    };
  }

  onChange = key => e => this.setState({ [key]: e.target.value });

  save = () => {
    const { id, name, bio } = this.state;
    if (id) {
      this.props.actions.update(id, name, bio);
    } else {
      const newId = uuid();
      this.setState({ id: newId });
      this.props.actions.create(newId, name, bio);
    }
    this.props.history.push('/actors');
  };

  render() {
    return <div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
            id="name"
            className="form-control"
            type="text"
            value={this.state.name}
            onChange={this.onChange('name')} />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Bio</label>
        <textarea
            id="bio"
            className="form-control"
            value={this.state.bio}
            onChange={this.onChange('bio')} />
      </div>
      <SaveButton
          disabled={this.state.name.length === 0}
          onClick={this.save} />
    </div>;
  }
}

ActorInput.propTypes = {
  actions: PropTypes.shape({
    create: PropTypes.func,
    update: PropTypes.func,
  }),
  bio: PropTypes.string,
  history: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
};

ActorInput.defaultProps = {
  bio: '',
  name: '',
};

const mapStateToProps = ({ actors }, { id }) => {
  if (id) {
    return { ...actors[id] };
  }
  return { id };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    create: (id, name, bio) => dispatch(addActor(id, name, bio)),
    update: (id, name, bio) => dispatch(updateActor(id, name, bio)),
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActorInput));
