import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Navigation from './components/navigation/navigation';
import MovieList from './components/movie-list/movie-list';
import ActorList from './components/actor-list/actor-list';
import ActorInput from './components/actor-input/actor-input';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div className="main">
            <Route
                path="/"
                component={Navigation} />
            <Route
                path="/movies"
                component={MovieList} />
            <Route
                path="/actors"
                component={ActorList} />
            <Route
                path="/actors/add"
                component={ActorInput} />
          </div>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
