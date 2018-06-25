export const ADD_ACTOR = 'ADD_ACTOR';

export const addActor = (id, name, bio) => ({
  type: ADD_ACTOR,
  data: {
    id,
    name,
    bio,
  },
});
