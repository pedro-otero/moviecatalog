import { ADD_ACTOR, addActor, REMOVE_ACTOR, removeActor, UPDATE_ACTOR, updateActor } from './actors';

describe('Actors', () => {
  it('ACTION: Add', () => {
    const action = addActor(1, 'Someone', 'Born somewhere on 1944');
    expect(action).toEqual({
      type: ADD_ACTOR,
      data: {
        id: 1,
        name: 'Someone',
        bio: 'Born somewhere on 1944',
      },
    });
  });

  it('ACTION: Update', () => {
    const action = updateActor(1, 'Someone', 'Born somewhere on 1944');
    expect(action).toEqual({
      type: UPDATE_ACTOR,
      data: {
        id: 1,
        name: 'Someone',
        bio: 'Born somewhere on 1944',
      },
    });
  });

  it('ACTION: Remove', () => {
    const action = removeActor(1);
    expect(action).toEqual({
      type: REMOVE_ACTOR,
      data: {
        id: 1,
      },
    });
  });
});
