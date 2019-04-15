import React from 'react';
import { SavedCountries, mapStateToProps } from './SavedCountries';
import { shallow } from 'enzyme';

describe('SavedCountries', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SavedCountries />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return correct props', () => {
      const mockState = {
        data: ['data'],
        other: 'other'
      }
      const expected = {
        data: ['data']
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});