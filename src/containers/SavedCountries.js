import React, { Component } from 'react';
import CountryContainer from './CountriesContainer/CountriesContainer';
import { connect } from 'react-redux';

export class SavedCountries extends Component {
  filterCountries = () => {
    const localSaved = localStorage.getItem('saved')
    const parsed = JSON.parse(localSaved)
    const { data } = this.props;
    let filtered = []
    data.forEach(country => {
      parsed.forEach(savedCountry => {
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
  data: state.data
});

export default connect(mapStateToProps)(SavedCountries);