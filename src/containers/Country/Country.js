import React from 'react';
import classnames from 'classnames';
import './Country.css';
import { Link } from 'react-router-dom';

export const Country = (props) => {
  return (
    <Link to={`/details/${props.id}`} style={{ textDecoration: 'none' }}>
      <div className='country'>
        <h2>{props.name}</h2>
        <button className={classnames('rating', props.rating)}>{props.rating}</button>
      </div>
    </Link>
  )
}