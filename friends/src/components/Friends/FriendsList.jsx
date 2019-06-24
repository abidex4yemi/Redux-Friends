import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const FriendsList = props => {
	const { friends, deleteFriend } = props;

	return <section>{friends.map(friend => <Friend key={uuid()} {...friend} deleteFriend={deleteFriend} />)}</section>;
};

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			age: PropTypes.number,
			email: PropTypes.string
		})
	),
	deleteFriend: PropTypes.func.isRequired
};
