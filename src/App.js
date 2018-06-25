import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';
import MovieList from './components/movie-list/movie-list';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route path="/">
            <Navigation />
          </Route>
          <Route
              path="/movies"
              component={MovieList} />
        </div>
      </Router>
    );
  }
}

export default App;
