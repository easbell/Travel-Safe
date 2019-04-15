import React, { Component } from 'react';
import CountryContainer from '../../components/CountriesContainer/CountriesContainer';
import { connect } from 'react-redux';

export class SavedCountries extends Component {
  filterCountries = () => {
    const localSaved = localStorage.getItem('saved')
    if(!localSaved) return <p>Please add to favorites.</p>
    const parsed = JSON.parse(localSaved)
    let filtered = []
    this.props.data.forEach(country => {
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