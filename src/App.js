import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Navigation from './components/navigation/navigation';
import MovieList from './components/movie-list/movie-list';

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
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
