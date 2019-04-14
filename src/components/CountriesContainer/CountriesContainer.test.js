import React from 'react';
import { CountriesContainer, mapStateToProps } from './CountriesContainer';
import { shallow } from 'enzyme';
import { Country } from '../Country/Country';

describe('CountriesContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CountriesContainer />)
  });

  it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call cleanData', () => {
    const mockCountries = [{name: 'USA'}, {name: 'France'}];
    const expected = [<Country id="USA" name="USA" />, <Country id="France" name="France" />]
    const cleaned = wrapper.instance().cleanData(mockCountries);
    expect(JSON.stringify(cleaned)).toEqual(JSON.stringify(expected));
  });

  it('should return rating L when checkRating is called', () => {
    const mockCountry = {name: 'France', rating: 2.4};
    const expected = wrapper.instance().checkRating(mockCountry);
    expect(expected).toBe('L');
  });

  it('should return rating M when checkRating is called', () => {
    const mockCountry = {name: 'France', rating: 3};
    const expected = wrapper.instance().checkRating(mockCountry);
    expect(expected).toBe('M');
  });

  it('should return rating H when checkRating is called', () => {
    const mockCountry = {name: 'France', rating: 4};
    const expected = wrapper.instance().checkRating(mockCountry);
    expect(expected).toBe('H');
  });

  it('should return rating E when checkRating is called', () => {
    const mockCountry = {name: 'France', rating: 5};
    const expected = wrapper.instance().checkRating(mockCountry);
    expect(expected).toBe('E');
  });

  describe('mapStateToProps', () => {
    it('should return an object with the vaccine object', () => {
      const mockState = {
        data: {country: 'France', data: []},
        other: 'other'
      }
      const expected = {
        data: {country: 'France', data: []}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});