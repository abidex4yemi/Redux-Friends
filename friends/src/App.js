import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './views/Login/Login';
import { Auth } from './Auth/Auth';
import { FriendFormView, FriendsListView } from './views/Friends/index';
import { store } from './redux/store';

export const App = () => {
	return (
		<Provider store={store}>
			<Route exact path="/" render={props => <Login {...props} />} />
			<Route exact path="/friends" render={props => <Auth component={FriendsListView} {...props} />} />
			<Route exact path="/friends/add" render={props => <Auth {...props} component={FriendFormView} />} />
		</Provider>
	);
};
