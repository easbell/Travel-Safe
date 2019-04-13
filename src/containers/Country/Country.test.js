import React from 'react';
import { Country } from './Country';
import { shallow } from 'enzyme';

describe('Country', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(
      <Country 
        key={'France'} 
        name={'France'}
        rating={2.4}
      />)
      expect(wrapper).toMatchSnapshot();
  });
});