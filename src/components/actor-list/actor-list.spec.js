import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ActorList } from './actor-list';

Enzyme.configure({ adapter: new Adapter() });

describe('Actor List component', () => {
  it('renders container', () => {
    const wrapper = shallow(<ActorList actors={[]} />);
    expect(wrapper.find('div[className="container"]')).toHaveLength(1);
  });

  it('renders actors', () => {
    const actors = [{
      id: 1,
      name: '',
    }, {
      id: 2,
      name: '',
    }];
    const wrapper = shallow(<ActorList actors={actors} />);
    expect(wrapper.find('div[className="row pb-2 pt-2 border-bottom"]')).toHaveLength(2);
  });
});
