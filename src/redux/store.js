/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import { reduceActors } from './actors';
import { reduceMovies } from './movies';

const devTools = global.window.__REDUX_DEVTOOLS_EXTENSION__ &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__();

export default function () {
  return createStore(combineReducers({
    actors: reduceActors,
    movies: reduceMovies,
  }), devTools);
}
