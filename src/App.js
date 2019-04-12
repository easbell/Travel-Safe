import {fetchSafety } from './thunks/fetchSafety';
import {fetchVaccines } from './thunks/fetchVaccines';
import React, { Component } from 'react';
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
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchSafety: () => dispatch(fetchSafety()),
  fetchVaccines: () => dispatch(fetchVaccines())
});

export const mapStateToProps = (state) => ({
  safety: state.safety,
  vaccines: state.vaccines
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
