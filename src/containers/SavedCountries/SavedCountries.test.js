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

  it('sets state when filterCountries is invoked', () => {
    const mockProps = [{id: "AE"}, {id: "AU"}, {id: "AW"}]
    wrapper = shallow(<SavedCountries 
      data={mockProps}
    />)
    const mockCountries = ["AE", "AU", "AW"];

    wrapper.instance().filterCountries(mockCountries);
    expect(wrapper.state('filtered')).toEqual(mockProps);
  });

  it.skip('invokes filterCountries if saved is in localStorage', () => {
    wrapper.instance().checkStorage();
    const spy = jest.spyOn(wrapper.instance(), 'filterCountries');
    expect(spy).toHaveBeenCalled();
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