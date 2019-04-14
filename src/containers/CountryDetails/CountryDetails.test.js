import React from 'react';
import { CountryDetails } from './CountryDetails';
import { shallow } from 'enzyme';

describe('CountryDetails', () => {
  it('should match snapshot', () => {
    const country = {
      id: "AF",
      name: "Afghanistan",
      rating: 5,
      vaccines:
      {"most travelers": ["Hepatitis A", "Typhoid", "Polio"],
      "some travelers": ["Hepatitis B", "Cholera", "Malaria", "Rabies", "Yellow Fever"]}
    }

    let wrapper = shallow(
      <CountryDetails 
        {...country}
        key={country.name}
      />)
      expect(wrapper).toMatchSnapshot();
  });
});