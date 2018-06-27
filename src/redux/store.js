/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import { reduceActors } from './actors';
import { reduceMovies } from './movies';
import mockState from '../mock/state.json';

const devTools = global.window.__REDUX_DEVTOOLS_EXTENSION__ &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__();

export default function () {
  if (process.env.REACT_APP_MOCK === 'YES') {
    return createStore(combineReducers({
      actors: reduceActors,
      movies: reduceMovies,
    }), mockState, devTools);
  }
  return createStore(combineReducers({
    actors: reduceActors,
    movies: reduceMovies,
  }), devTools);
}
