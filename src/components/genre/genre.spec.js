import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Genre from './genre';

Enzyme.configure({ adapter: new Adapter() });

describe('Genre component', () => {
  it('renders anchor', () => {
    const wrapper = shallow(<Genre name={'name'} onClick={jest.fn()} />);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('renders span', () => {
    const wrapper = shallow(<Genre name={'name'} />);
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
