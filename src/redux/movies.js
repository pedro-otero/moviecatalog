export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export const addMovie = (id, title, synopsis, genres, actors) => ({
  type: ADD_MOVIE,
  data: {
    id,
    title,
    synopsis,
    genres,
    actors,
  },
});

export const updateMovie = (id, title, synopsis, genres, actors) => ({
  type: UPDATE_MOVIE,
  data: {
    id,
    title,
    synopsis,
    genres,
    actors,
  },
});

export const removeMovie = id => ({
  type: REMOVE_MOVIE,
  data: {
    id,
  },
});

export const reduce = (state = {}, { type, data }) => {
  switch (type) {
    case ADD_MOVIE: {
      return Object.assign({ ...state }, {
        [data.id]: {
          title: data.title,
          synopsis: data.synopsis,
          genres: data.genres,
          actors: data.actors,
        },
      });
    }
    case UPDATE_MOVIE: {
      return Object.assign({ ...state }, {
        [data.id]: {
          title: data.title,
          synopsis: data.synopsis,
          genres: data.genres,
          actors: data.actors,
        },
      });
    }
    case REMOVE_MOVIE: {
      const { [data.id]: value, ...theRest } = state;
      return theRest;
    }
    default: {
      return state;
    }
  }
};
