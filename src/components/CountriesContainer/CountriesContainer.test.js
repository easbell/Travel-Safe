import React from 'react';
import { CountriesContainer } from './CountriesContainer';
import { shallow } from 'enzyme';
import { Country } from '../../containers/Country/Country';

describe('CountriesContainer', () => {
  let wrapper;
  let mockCountries;
  beforeEach(() => {
    mockCountries = [{name: 'USA'}, {name: 'France'}];
    wrapper = shallow(
      <CountriesContainer countries={mockCountries}/>)
  });

  it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call renderCountries', () => {
    const mockCountries = [{name: 'USA'}, {name: 'France'}];
    const expected = [<Country id="USA" name="USA" />, <Country id="France" name="France" />]
    const cleaned = wrapper.instance().renderCountries(mockCountries);
    expect(JSON.stringify(cleaned)).toEqual(JSON.stringify(expected));
  });
});