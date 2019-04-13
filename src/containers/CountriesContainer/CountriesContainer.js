import React, { Component } from 'react';
import { connect } from 'react-redux';
import { combineData } from '../../helpers/combineData';
import { Country } from '../Country/Country';

export class CountriesContainer extends Component {
  checkRating = (country) => {
    if(country.rating <= 2.5) {
      return 'L'
    } else if(2.6 <= country.rating && country.rating <= 3.5) {
      return 'M'
    } else if(3.6 <= country.rating && country.rating <= 4.5) {
      return 'H'
    } else if(country.rating > 4.5) {
      return 'E'
    } 
  }

  cleanData = () => {
    const { safety, vaccines } = this.props;
    const cleaned = combineData(safety, vaccines);
    return cleaned.map(country => {
      let rating = this.checkRating(country)
      return <Country key={country.name} {...country} rating={rating}/>
    })
  }

  render() {
    const { safety } = this.props;
    return (
      <div>
        {safety && this.cleanData()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  safety: state.safety,
  vaccines: state.vaccines
});

export default connect(mapStateToProps)(CountriesContainer);