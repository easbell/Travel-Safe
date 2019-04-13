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
    it('should return an object with the safety and vaccine objects', () => {
      const mockState = {
        safety: {country: 'France', rating: 2.4},
        vaccines: {country: 'France', vaccines: []},
        other: 'other'
      }
      const expected = {
        safety: {country: 'France', rating: 2.4},
        vaccines: {country: 'France', vaccines: []}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});