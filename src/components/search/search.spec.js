import { Search } from './search';

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
    expect(state.byTitle[0].title).toEqual('The One That Should Make It');
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
    expect(state.bySynopsis[0].title).toEqual('The One That Should Make It');
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
    expect(state.byCast[0].title).toEqual('The One That Should Make It');
  });

  it('filters movies by genres', () => {
    const movie1 = {
      title: 'The One That Should Make It',
      genres: ['Comedy', 'Horror'],
    };
    const movie2 = {
      title: 'Not the one',
    };
    const state = Search.getDerivedStateFromProps({
      movies: [movie1, movie2],
      filter: 'horror',
    });
    expect(state.byGenre[0].title).toEqual('The One That Should Make It');
  });
});
