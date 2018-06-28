import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
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

const Top = styled.div`
  background-color: #dddddd;
`;

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <Top className="container-fluid pt-3 sticky-top shadow-sm">
              <div className="row">
                <div className="col-4 d-none d-md-block"><h1>mooveez</h1></div>
                <div className="col-12 col-md-8"><SearchInput /></div>
              </div>
              <div className="d-block d-md-none col-12">
                <Route
                    path="/"
                    component={Navigation} />
              </div>
            </Top>
            <div className="container-fluid d-flex flex-column flex-md-row">
              <div className="d-none d-md-block col-md-2 pt-3 border-right">
                <Route
                    path="/"
                    component={Navigation} />
              </div>
              <div className="col-12 col-md-10 py-3">
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
