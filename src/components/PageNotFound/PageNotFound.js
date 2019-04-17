import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export const PageNotFound = () => {
	return (
		<div className='page-not-found'>
			<h2>This is not the page</h2>
			<h2>you are looking for.</h2>
			<h2 className='not-found'>404</h2>
		</div>
	)
}