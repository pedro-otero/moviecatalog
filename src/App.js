import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Navigation from './components/navigation/navigation';
import MovieList from './components/movie-list/movie-list';
import ActorList from './components/actor-list/actor-list';
import ActorInput from './components/actor-input/actor-input';
import MovieInput from './components/movie-input/movie-input';
import GenreList from './components/genre-list/genre-list';

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
                exact
                path="/movies"
                component={MovieList} />
            <Route
                exact
                path="/add/movie"
                component={MovieInput} />
            <Route
                exact
                path="/movies/:id"
                render={({ match }) => <MovieInput id={match.params.id} />} />
            <Route
                exact
                path="/actors"
                component={ActorList} />
            <Route
                exact
                path="/add/actor"
                component={ActorInput} />
            <Route
                exact
                path="/actors/:id"
                render={({ match }) => <ActorInput id={match.params.id} />} />
            <Route
                path="/genres"
                component={GenreList} />
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
