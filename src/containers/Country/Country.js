import React, { Component } from 'react';
import classnames from 'classnames';
import './Country.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSaved } from '../../actions';

export class Country extends Component {
  addCountry = () => {
    const { id } = this.props
    const localSaved = localStorage.getItem('saved')
    const parsed = JSON.parse(localSaved)
    if(parsed) {
      localStorage.setItem('saved', JSON.stringify([...parsed, id]))
    } else {
      localStorage.setItem('saved', JSON.stringify([id]))
    }
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
  setSaved: (id) => dispatch(setSaved(id))
});

export const mapStateToProps = state => ({
  saved: state.saved
})

export default connect(mapStateToProps, mapDispatchToProps)(Country);