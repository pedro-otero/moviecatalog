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
import SearchInput from './components/search-input/search-input';
import Search from './components/search/search';
import Actor from './components/actor/actor';
import Movie from './components/movie/movie';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-1"><h1>mooveez</h1></div>
              <div className="col-7"><SearchInput /></div>
            </div>
            <div className="row">
              <div className="col">
                <Route
                    path="/"
                    component={Navigation} />
              </div>
              <div className="col-8">
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
                    render={({ match }) => <Movie id={match.params.id} />} />
                <Route
                    exact
                    path="/edit/movie/:id"
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
                    render={({ match }) => <Actor id={match.params.id} />} />
                <Route
                    exact
                    path="/edit/actor/:id"
                    render={({ match }) => <ActorInput id={match.params.id} />} />
                <Route
                    path="/genres"
                    component={GenreList} />
                <Route
                    path="/search"
                    render={({ location }) => <Search filter={new URLSearchParams(location.search).get('filter')} />} />
              </div>
            </div>
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
