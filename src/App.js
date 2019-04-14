import {fetchData } from './thunks/fetchData';
import React, { Component } from 'react';
import CountriesContainer from './containers/CountriesContainer/CountriesContainer';
import SavedCountries from './containers/SavedCountries';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CountryDetails from './containers/CountryDetails/CountryDetails';
import './App.css';
import { setSaved } from './actions';

export class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    const stored = localStorage.getItem('saved');
    this.props.setSaved(JSON.parse(stored));
  }

  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <h1>Travel<span className='bold'>Safe</span></h1>
        <Link to='/saved'>Saved Countries</Link>
        <Route exact path='/' render={() => (
            <CountriesContainer countries={data}/>
        )} />
        <Route exact path='/saved' render={() => (
            <SavedCountries />
        )} />
        <Route path='/details/:id' render={({ match }) => {
          const { id } = match.params;
          const selectedCountry = data.find(country => {
            return country.id === id
          })
          if(selectedCountry) {
            return <CountryDetails {...selectedCountry} />
          }
        }} />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
  setSaved: (saved) => dispatch(setSaved(saved))
});

export const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
