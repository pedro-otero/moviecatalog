import { REMOVE_ACTOR } from './actors';

export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export const addMovie = (id, title, synopsis, genres, cast) => ({
  type: ADD_MOVIE,
  data: {
    id,
    title,
    synopsis,
    genres,
    cast,
  },
});

export const updateMovie = (id, title, synopsis, genres, cast) => ({
  type: UPDATE_MOVIE,
  data: {
    id,
    title,
    synopsis,
    genres,
    cast,
  },
});

export const removeMovie = id => ({
  type: REMOVE_MOVIE,
  data: {
    id,
  },
});

export const reduceMovies = (state = {}, { type, data }) => {
  switch (type) {
    case ADD_MOVIE: {
      return Object.assign({ ...state }, {
        [data.id]: {
          title: data.title,
          synopsis: data.synopsis,
          genres: data.genres,
          cast: data.cast,
        },
      });
    }
    case UPDATE_MOVIE: {
      return Object.assign({ ...state }, {
        [data.id]: {
          title: data.title,
          synopsis: data.synopsis,
          genres: data.genres,
          cast: data.cast,
        },
      });
    }
    case REMOVE_MOVIE: {
      const { [data.id]: value, ...theRest } = state;
      return theRest;
    }
    case REMOVE_ACTOR: {
      return Object.entries(state)
        .map(([id, movie]) => [
          id,
          Object.assign({}, movie, {
            cast: movie.cast.filter(actorId => actorId !== data.id),
          })])
        .reduce((all, [id, movie]) => Object.assign({}, all, { [id]: movie }), {});
    }
    default: {
      return state;
    }
  }
};
