import React, { Component } from 'react';
import classnames from 'classnames';
import './Country.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSaved } from '../../actions';

export class Country extends Component {
  constructor() {
    super();
    this.state = {
      rating: ''
    }
  }

  componentDidMount() {
    this.checkRating();
  }

  checkRating = () => {
    const { rating } = this.props;
    if(rating <= 2.5) {
      this.setState({rating: 'L'})
    } else if(2.6 <= rating && rating <= 3.5) {
      this.setState({rating: 'M'})
    } else if(3.6 <= rating && rating <= 4.5) {
      this.setState({rating: 'H'})
    } else if(rating > 4.5) {
      this.setState({rating: 'E'})
    } 
  }

  addCountry = () => {
    const { id } = this.props
    const localSaved = localStorage.getItem('saved')
    const parsed = JSON.parse(localSaved)
    if(parsed && !localSaved.includes(id)) {
      localStorage.setItem('saved', JSON.stringify([...parsed, id]))
    } else if(!parsed) {
      localStorage.setItem('saved', JSON.stringify([id]))
    }
  }
  
  render() {
    const { id, name } = this.props;
    const { rating } = this.state;
    return (
      <div className='country'>
        <button className='btn' onClick={this.addCountry}>+</button>
        <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
          <h2>{name}</h2>
          <button className={classnames('btn', rating)}>{rating}</button>
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