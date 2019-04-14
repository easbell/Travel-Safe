import {fetchData } from './thunks/fetchData';
import React, { Component } from 'react';
import CountriesContainer from './containers/CountriesContainer/CountriesContainer';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CountryDetails from './containers/CountryDetails/CountryDetails';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <h1>Travel Safe</h1>
            <CountriesContainer />
          </div>
        )} />
        <Route path='/details/:id' render={({ match }) => {
          const { id } = match.params;
          const { data } = this.props;
          const selectedCountry = data.find(country => {
            return country.id == id
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
