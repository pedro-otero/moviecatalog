export const ADD_ACTOR = 'ADD_ACTOR';
export const UPDATE_ACTOR = 'UPDATE_ACTOR';
export const REMOVE_ACTOR = 'REMOVE_ACTOR';

export const addActor = (id, name, bio) => ({
  type: ADD_ACTOR,
  data: {
    id,
    name,
    bio,
  },
});

export const updateActor = (id, name, bio) => ({
  type: UPDATE_ACTOR,
  data: {
    id,
    name,
    bio,
  },
});

export const removeActor = id => ({
  type: REMOVE_ACTOR,
  data: {
    id,
  },
});

export const reduce = (state = {}, { type, data }) => {
  switch (type) {
    case ADD_ACTOR: {
      return Object.assign({ ...state }, {
        [data.id]: {
          name: data.name,
          bio: data.bio,
        },
      });
    }
    case UPDATE_ACTOR: {
      return Object.assign({ ...state }, {
        [data.id]: {
          name: data.name,
          bio: data.bio,
        },
      });
    }
    default: {
      return state;
    }
  }
};
