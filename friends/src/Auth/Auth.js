import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const Auth = ({ component: Component, ...props }) => {
	const getToken = localStorage.getItem('token');

	return <Route {...props} render={props => (getToken ? <Component {...props} /> : <Redirect to="/" />)} />;
};
