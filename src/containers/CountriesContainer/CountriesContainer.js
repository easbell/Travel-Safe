import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { data } = this.props;
    return data.map(country => {
      let rating = this.checkRating(country)
      return <Country key={country.name} id={country.name} {...country} rating={rating}/>
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data && this.cleanData()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps)(CountriesContainer);