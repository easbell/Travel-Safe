import React from 'react';
import './CountryDetails.css';

export const CountryDetails = (props) => {
  const checkKeys = () => {
    return Object.keys(props.vaccines).map(key => {
      return props.vaccines[key].map(vaccine => {
        return <p key={vaccine}>{vaccine}</p>
      })
    })
  }

  return (
    <div className='details'>
      <h2>{props.name}</h2>
      <h4>Advisory Level: {props.rating} / 5</h4>
      <h4>Recommended Vaccines:</h4>
      {checkKeys()}
    </div>
  )
}

export default CountryDetails;