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
