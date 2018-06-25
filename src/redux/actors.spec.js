import { ADD_ACTOR, addActor, reduceActors, REMOVE_ACTOR, removeActor, UPDATE_ACTOR, updateActor } from './actors';

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

  it('REDUCE: Add', () => {
    const actors = reduceActors({}, {
      type: ADD_ACTOR,
      data: {
        id: 1,
        name: 'Someone',
        bio: 'Born somewhere on 1944',
      },
    });
    expect(actors).toEqual({
      1: {
        name: 'Someone',
        bio: 'Born somewhere on 1944',
      },
    });
  });

  it('REDUCE: Update', () => {
    const actors = reduceActors({
      1: {
        name: 'Someone',
        bio: 'Born somewhere on 1944',
      },
    }, {
      type: UPDATE_ACTOR,
      data: {
        id: 1,
        name: 'Change name',
        bio: 'Change bio',
      },
    });
    expect(actors).toEqual({
      1: {
        name: 'Change name',
        bio: 'Change bio',
      },
    });
  });

  it('REDUCE: Remove', () => {
    const actors = reduceActors({
      id: {
        name: 'Someone',
        bio: 'Born somewhere on 1944',
      },
    }, {
      type: REMOVE_ACTOR,
      data: {
        id: 'id',
      },
    });
    expect(actors).toEqual({});
  });
});
