import React from 'react';
import { Link } from 'react-router-dom';

export const CountryDetails = (props) => {
  const checkKeys = () => {
    return Object.keys(props.vaccines).map(vaccine => (
    <p key={props.vaccines[vaccine]}>{vaccine}: {props.vaccines[vaccine]}</p>
    ));
  }

  return (
    <div>
      <Link to={`/`}>Back to Home</Link>
      <h2>{props.name}</h2>
      <h4>Safety Rating: {props.rating} / 5</h4>
      <h4>Recommended Vaccines:</h4>
      {checkKeys()}
    </div>
  )
}

export default CountryDetails;