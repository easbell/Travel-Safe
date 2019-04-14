import React, { Component } from 'react';
import classnames from 'classnames';
import './Country.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import cogoToast from 'cogo-toast';

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
      localStorage.setItem('saved', JSON.stringify([...parsed, id]));
    } else if(!parsed) {
      localStorage.setItem('saved', JSON.stringify([id]));
    }
    cogoToast.success('Country was added.', { 
      position: 'bottom-left'
    });
  }
  
  render() {
    const { id, name } = this.props;
    const { rating } = this.state;
    return (
      <div className='country'>
        <button className='btn add' onClick={this.addCountry}>+</button>
        <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
          <h2>{name}</h2>
        </Link>
        <button className={classnames('btn', rating)}>{rating}</button>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  saved: state.saved
})

export default connect(mapStateToProps)(Country);