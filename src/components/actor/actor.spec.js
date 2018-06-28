import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Actor } from './actor';

Enzyme.configure({ adapter: new Adapter() });

describe('Actor component', () => {
  it('renders bio', () => {
    const wrapper = shallow(<Actor name={'A name'} movies={[]} />);
    expect(wrapper.find('h2').text()).toEqual('A name');
  });

  it('renders name', () => {
    const wrapper = shallow(<Actor bio={'A bio'} movies={[]} />);
    expect(wrapper.find('p').text()).toEqual('A bio');
  });
});
