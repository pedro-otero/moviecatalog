import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route path="/">
            <Navigation />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
