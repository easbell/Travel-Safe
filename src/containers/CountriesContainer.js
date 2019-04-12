import React, { Component } from 'react';
import { connect } from 'react-redux';
import { combineData } from '../helpers/combineData';

export class CountriesContainer extends Component {
  cleanData = () => {
    const { safety, vaccines } = this.props;
    const cleaned = combineData(safety, vaccines);
    console.log(cleaned)
  }

  render() {
    return (
      <div>
        {this.cleanData()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  safety: state.safety,
  vaccines: state.vaccines
});

export default connect(mapStateToProps)(CountriesContainer);