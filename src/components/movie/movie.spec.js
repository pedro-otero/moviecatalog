import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Movie } from './movie';

Enzyme.configure({ adapter: new Adapter() });

describe('Movie component', () => {
  it('renders title', () => {
    const wrapper = shallow(<Movie title={'A title'} genres={[]} cast={[]} />);
    expect(wrapper.find('h2').text()).toEqual('A title');
  });

  it('renders synopsis', () => {
    const wrapper = shallow(<Movie synopsis={'A synopsis'} genres={[]} cast={[]} />);
    expect(wrapper.find('p').at(0).text()).toEqual('A synopsis');
  });
});
