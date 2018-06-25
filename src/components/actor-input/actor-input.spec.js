import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '@material-ui/core/umd/material-ui.production.min';
import ActorInput from './actor-input';

Enzyme.configure({ adapter: new Adapter() });

describe('Actor Input', () => {
  it('calls create action if id is null', () => {
    const actions = {
      create: jest.fn(),
    };
    const wrapper = shallow(<ActorInput actions={actions} />);
    wrapper.find(Button).simulate('click');
    expect(actions.create).toBeCalled();
  });

  it('calls update action if id was passed', () => {
    const actions = {
      update: jest.fn(),
    };
    const wrapper = shallow(<ActorInput
        id="1"
        actions={actions} />);
    wrapper.find(Button).simulate('click');
    expect(actions.update).toBeCalled();
  });
});
