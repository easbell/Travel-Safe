import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CountriesContainer.css';
import Country from '../Country/Country';
import fuzzyFilterFactory from "react-fuzzy-filter";
const { InputFilter, FilterResults } = fuzzyFilterFactory();

export class CountriesContainer extends Component {
  renderCountries = () => {
    return this.props.countries.map(country => {
      return <Country key={country.name} {...country}/>
    });
  }

  render() {
    const { countries } = this.props;
    const fuseConfig = {
      keys: ['name'],
      matchAllTokens: true,
      tokenize: true,
      threshold: 0
    };

    return (
      <div>
        <InputFilter />
        <FilterResults items={countries} fuseConfig={fuseConfig}>
          {filteredItems => {
            return (
              <div className='container'>
                {this.renderCountries(filteredItems)}
              </div>
            )
          }}
        </FilterResults>
      </div>
    )
  }
}

export default CountriesContainer;