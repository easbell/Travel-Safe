import React from 'react';
import classnames from 'classnames';
import './Country.css';

export const Country = (props) => {
  const renderDetails = () => {
    console.log(props)
  }

  return (
    <div className='country' onClick={renderDetails}>
      <h2>{props.name}</h2>
      <button className={classnames('rating', props.rating)}>{props.rating}</button>
    </div>
  )
}