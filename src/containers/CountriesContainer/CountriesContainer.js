import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CountriesContainer.css';
import { Country } from '../Country/Country';
import fuzzyFilterFactory from "react-fuzzy-filter";
const { InputFilter, FilterResults } = fuzzyFilterFactory();

export class CountriesContainer extends Component {
  checkRating = (country) => {
    if(country.rating <= 2.5) {
      return 'L'
    } else if(2.6 <= country.rating && country.rating <= 3.5) {
      return 'M'
    } else if(3.6 <= country.rating && country.rating <= 4.5) {
      return 'H'
    } else if(country.rating > 4.5) {
      return 'E'
    } 
  }

  cleanData = (countries) => {
    return countries.map(country => {
      let rating = this.checkRating(country)
      return <Country key={country.name} id={country.name} {...country} rating={rating}/>
    });
  }

  render() {
    const { data } = this.props;
    const fuseConfig = {
      keys: ['name'],
      matchAllTokens: true,
      tokenize: true,
      threshold: 0
    };
    
    return (
      <div>
        <InputFilter />
        <FilterResults items={data} fuseConfig={fuseConfig}>
          {filteredItems => {
            return (
              <div className='container'>
                {this.cleanData(filteredItems)}
              </div>
            )
          }}
        </FilterResults>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps)(CountriesContainer);