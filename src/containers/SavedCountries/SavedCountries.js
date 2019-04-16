import React, { Component } from 'react';
import CountryContainer from '../../components/CountriesContainer/CountriesContainer';
import { connect } from 'react-redux';

export class SavedCountries extends Component {
  state = {
    filtered: []
  }

  componentDidMount() {
    this.checkStorage();
  }
  
  checkStorage = () => {
    const localSaved = localStorage.getItem('saved')
    if(!localSaved) return false
    this.filterCountries(JSON.parse(localSaved))
  }

  filterCountries = (countries) => {
    let filtered = []
    this.props.data.forEach(country => {
      countries.forEach(savedCountry => {
        if(country.id === savedCountry) {
          filtered.push(country)
        }
      })
    });
    this.setState({ filtered })
  }

  render() {
    const { filtered } = this.state;
    return (
      <div>
        {filtered.length === 0 
          ? <p>Please add to favorites.</p>
          : <CountryContainer countries={filtered} /> 
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps)(SavedCountries);