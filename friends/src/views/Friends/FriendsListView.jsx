import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFriends, deleteFriend } from '../../redux/actions';
import { FriendsList } from '../../components/Friends';

const FriendsListView = props => {
	const { friends, fetchFriends, deleteFriend } = props;

	useEffect(fetchFriends, []);

	return (
		<main>
			{friends.length > 0 ? <FriendsList friends={friends} deleteFriend={deleteFriend} /> : <div>No friends</div>}
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
	),
	deleteFriend: PropTypes.func.isRequired,
	fetchFriends: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		friends: state.friendsReducer.friends
	};
};

export default connect(mapStateToProps, { fetchFriends, deleteFriend })(FriendsListView);
