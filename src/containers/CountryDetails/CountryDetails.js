import React from 'react';

export const CountryDetails = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>Safety Rating: {props.rating} / 5</h4>
      <h4>Recommended Vaccines:</h4>
      <p>Most Travelers: {props.vaccines['most travelers']}</p>
      <p>Some Travelers: {props.vaccines['some travelers']}</p>
    </div>
  )
}

export default CountryDetails;