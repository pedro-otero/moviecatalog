import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './search';

Enzyme.configure({ adapter: new Adapter() });

describe('Search component', () => {
  it('filters movies by title', () => {
    const movie1 = {
      title: 'The One That Should Make It',
    };
    const movie2 = {
      title: 'Not the one',
    };
    const state = Search.getDerivedStateFromProps({
      filter: 'make',
      movies: [movie1, movie2],
    });
    expect(state.movies[0].title).toEqual('The One That Should Make It');
  });

  it('filters movies by synopsis', () => {
    const movie1 = {
      title: 'The One That Should Make It',
      synopsis: 'Argument and something more',
    };
    const movie2 = {
      title: 'Not the one',
    };
    const state = Search.getDerivedStateFromProps({
      movies: [movie1, movie2],
      filter: 'argument',
    });
    expect(state.movies[0].title).toEqual('The One That Should Make It');
  });

  it('filters movies by cast', () => {
    const movie1 = {
      title: 'The One That Should Make It',
      cast: ['Guy', 'Girl'],
    };
    const movie2 = {
      title: 'Not the one',
      cast: ['Guy'],
    };
    const state = Search.getDerivedStateFromProps({
      movies: [movie1, movie2],
      filter: 'girl',
    });
    expect(state.movies[0].title).toEqual('The One That Should Make It');
  });

  it('filters movies by genres', () => {
    const movie1 = {
      title: 'The One That Should Make It',
      genres: ['Comedy', 'Horror'],
    };
    const movie2 = {
      title: 'Not the one',
      cast: ['Comedy'],
    };
    const state = Search.getDerivedStateFromProps({
      movies: [movie1, movie2],
      filter: 'horror',
    });
    expect(state.movies[0].title).toEqual('The One That Should Make It');
  });
});
