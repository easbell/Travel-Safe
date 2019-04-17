import {fetchData } from '../../thunks/fetchData';
import React, { Component } from 'react';
import CountriesContainer from '../../components/CountriesContainer/CountriesContainer';
import SavedCountries from '../SavedCountries/SavedCountries';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';
import { PageNotFound } from '../../components/PageNotFound/PageNotFound';
import './App.css';


export class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  /* istanbul ignore next */
  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <NavLink to='/' className='header'>
          <h1>Travel<span className='bold'>Safe</span></h1>
        </NavLink>
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <NavLink to='/saved' className='saved'>Saved</NavLink>
              <CountriesContainer countries={data}/>
            </div>
          )} />
          <Route exact path='/saved' render={() => (
            <div>
                <NavLink to='/' className='saved'>Home</NavLink>
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
          <Route component={PageNotFound} />
        </Switch>
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
