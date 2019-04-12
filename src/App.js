import {fetchSafety } from './thunks/fetchSafety';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSafety();
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
  fetchSafety: () => dispatch(fetchSafety())
});

export default connect(null, mapDispatchToProps)(App);
