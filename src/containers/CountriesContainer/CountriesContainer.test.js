import React from 'react';
import { CountriesContainer, mapStateToProps } from './CountriesContainer';
import { shallow } from 'enzyme';

describe('CountriesContainer', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(
      <CountriesContainer />)
      expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with the vaccine object', () => {
      const mockState = {
        vaccines: {country: 'France', vaccines: []},
        other: 'other'
      }
      const expected = {
        vaccines: {country: 'France', vaccines: []}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});