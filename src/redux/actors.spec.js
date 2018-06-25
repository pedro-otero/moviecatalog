import { ADD_ACTOR, addActor } from './actors';

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
});
