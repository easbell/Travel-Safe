import React, { Component } from 'react';
import CountryContainer from './CountriesContainer/CountriesContainer';
import { connect } from 'react-redux';

export class SavedCountries extends Component {
  filterCountries = () => {
    const { saved, data } = this.props;
    let filtered = []
    data.forEach(country => {
      saved.forEach(savedCountry => {
        if(country.id === savedCountry) {
          filtered.push(country)
        }
      })
    });
    return <CountryContainer countries={filtered} />
  }

  render() {
    return (
      <div>
        {this.filterCountries()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state.data,
  saved: state.saved
});

export default connect(mapStateToProps)(SavedCountries);