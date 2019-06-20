import React from 'react';
import PropTypes from 'prop-types';
import { FriendsList } from '../Friends';

export const FriendsListView = props => {
	const { friends } = props;

	return (
		<main>
			<FriendsList friends={friends} />
		</main>
	);
};

FriendsListView.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			age: PropTypes.number,
			email: PropTypes.string
		})
	)
};
