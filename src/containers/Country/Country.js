import React, { Component } from 'react';
import classnames from 'classnames';
import './Country.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveCountry } from '../../thunks/saveCountry';

export class Country extends Component {
  addCountry = () => {
    this.props.saveCountry(this.props.id)
  }

  render() {
    return (
      <div className='country'>
        <button className='btn' onClick={this.addCountry}>+</button>
        <Link to={`/details/${this.props.id}`} style={{ textDecoration: 'none' }}>
          <h2>{this.props.name}</h2>
          <button className={classnames('btn', this.props.rating)}>{this.props.rating}</button>
        </Link>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  saveCountry: (id) => dispatch(saveCountry(id))
});

export default connect(null, mapDispatchToProps)(Country);