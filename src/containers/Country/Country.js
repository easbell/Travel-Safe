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
      rating: '',
      saved: false
    }
  }

  componentDidMount() {
    this.checkRating();
    this.checkSaved();
  }

  checkSaved = ()  => {
    const { id } = this.props
    const localSaved = localStorage.getItem('saved')
    if(localSaved && localSaved.includes(id)) {
      this.setState({ saved: true })
    }
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

  displayMessage = (message) => {
    cogoToast.success(message, { 
      position: 'bottom-left'
    });
  }

  addCountry = () => {
    const { id } = this.props;
    const localSaved = JSON.parse(localStorage.getItem('saved'))
    if(localSaved && !localSaved.includes(id)) {
      localStorage.setItem('saved', JSON.stringify([...localSaved, id]));
    } else if(!localSaved) {
      localStorage.setItem('saved', JSON.stringify([id]));
    }
    this.displayMessage('Country was added to favorites.')      
  }

  toggleCountry = (e) => {
    const { id } = this.props;
    if(e.target.className.includes('countrySaved')) {
      this.setState({ saved: false });
      const localSaved = JSON.parse(localStorage.getItem('saved'))
      const filteredSaved = localSaved.filter(country => country !== id)
      localStorage.setItem('saved', JSON.stringify(filteredSaved));
      this.displayMessage('Country removed from favorites.')
    } else {
      this.setState({ saved: true });
      this.addCountry();
    }
  }
  
  render() {
    const classNames = require('classnames');
    const { id, name } = this.props;
    const { rating, saved } = this.state;
    const btnClass = classNames({
      btn: true,
      add: true,
      countrySaved: saved
    });

    return (
      <div className='country'>
        {saved && <button className={btnClass} onClick={this.toggleCountry}>-</button>}
        {!saved && <button className={btnClass} onClick={this.toggleCountry}>+</button>}
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