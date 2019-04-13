import {fetchSafety } from './thunks/fetchSafety';
import {fetchVaccines } from './thunks/fetchVaccines';
import React, { Component } from 'react';
import CountriesContainer from './containers/CountriesContainer/CountriesContainer';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSafety();
    this.props.fetchVaccines();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Travel Safe</h1>
        </header>
        <CountriesContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchSafety: () => dispatch(fetchSafety()),
  fetchVaccines: () => dispatch(fetchVaccines())
});

export default connect(null, mapDispatchToProps)(App);
