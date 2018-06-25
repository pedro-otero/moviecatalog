import { ADD_MOVIE, addMovie, reduce, REMOVE_MOVIE, removeMovie, UPDATE_MOVIE, updateMovie } from './movies';

describe('Movies', () => {
  it('ACTION: Add', () => {
    const action = addMovie(1, 'Title', 'Synopsis', ['Genre 1', 'Genre 2'], ['actorId1', 'actorId2']);
    expect(action).toEqual({
      type: ADD_MOVIE,
      data: {
        id: 1,
        title: 'Title',
        synopsis: 'Synopsis',
        genres: ['Genre 1', 'Genre 2'],
        actors: ['actorId1', 'actorId2'],
      },
    });
  });

  it('ACTION: Update', () => {
    const action = updateMovie(1, 'Title', 'Synopsis', ['Genre 1', 'Genre 2'], ['actorId1', 'actorId2']);
    expect(action).toEqual({
      type: UPDATE_MOVIE,
      data: {
        id: 1,
        title: 'Title',
        synopsis: 'Synopsis',
        genres: ['Genre 1', 'Genre 2'],
        actors: ['actorId1', 'actorId2'],
      },
    });
  });

  it('ACTION: Remove', () => {
    const action = removeMovie(1);
    expect(action).toEqual({
      type: REMOVE_MOVIE,
      data: {
        id: 1,
      },
    });
  });

  it('REDUCE: Add', () => {
    const movies = reduce({}, {
      type: ADD_MOVIE,
      data: {
        id: 1,
        title: 'Title',
        synopsis: 'Synopsis',
        genres: ['Genre 1', 'Genre 2'],
        actors: ['actorId1', 'actorId2'],
      },
    });
    expect(movies).toEqual({
      1: {
        title: 'Title',
        synopsis: 'Synopsis',
        genres: ['Genre 1', 'Genre 2'],
        actors: ['actorId1', 'actorId2'],
      },
    });
  });

  it('REDUCE: Update', () => {
    const movies = reduce({
      1: {
        title: 'Title',
        synopsis: 'Synopsis',
        genres: ['Genre 1', 'Genre 2'],
        actors: ['actorId1', 'actorId2'],
      },
    }, {
      type: UPDATE_MOVIE,
      data: {
        id: 1,
        title: 'Title changed',
        synopsis: 'Synopsis changed',
        genres: ['Genre 3'],
        actors: ['actorId3'],
      },
    });
    expect(movies).toEqual({
      1: {
        title: 'Title changed',
        synopsis: 'Synopsis changed',
        genres: ['Genre 3'],
        actors: ['actorId3'],
      },
    });
  });

  it('REDUCE: Remove', () => {
    const movies = reduce({
      id: {
        title: 'Title changed',
        synopsis: 'Synopsis changed',
        genres: ['Genre 3'],
        actors: ['actorId3'],
      },
    }, {
      type: REMOVE_MOVIE,
      data: {
        id: 'id',
      },
    });
    expect(movies).toEqual({});
  });
});
