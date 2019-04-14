import {fetchData } from '../../thunks/fetchData';
import React, { Component } from 'react';
import CountriesContainer from '../../components/CountriesContainer/CountriesContainer';
import SavedCountries from '../SavedCountries/SavedCountries';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <h1>Travel<span className='bold'>Safe</span></h1>
        <Route exact path='/' render={() => (
          <div>
            <NavLink to='/saved'className='saved'>Saved</NavLink>
            <CountriesContainer countries={data}/>
          </div>
        )} />
        <Route exact path='/saved' render={() => (
            <div>
              <NavLink to='/'className='saved'>Home</NavLink>
              <SavedCountries />
            </div>
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
  fetchData: () => dispatch(fetchData())
});

export const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
