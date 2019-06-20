import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const Auth = ({ component: Component, ...allProps }) => {
	const getToken = localStorage.getItem('token');

	return <Route {...allProps} render={props => (getToken ? <Component {...props} /> : <Redirect to="/" />)} />;
};
