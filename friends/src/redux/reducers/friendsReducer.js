import { ADD_FRIENDS, SET_ACTION_STATUS, DELETE_FRIEND, ADD_FRIEND, UPDATE_FRIEND_INFO } from '../actions';

const InitialState = {
	deletingFriend: false,
	fetchingFriends: false,
	friends: [],
	loggingIn: false,
	savingFriend: false,
	updatingFriend: false,
	removingFriend: false,
	loggedIn: false,
	error: null
};

export const friendsReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_ACTION_STATUS:
			return {
				...state,
				...action.payload
			};
		case ADD_FRIENDS:
			return {
				...state,
				friends: action.payload
			};
		case ADD_FRIEND:
			return {
				...state,
				friends: [...state.friends, action.payload]
			};
		case DELETE_FRIEND:
			return {
				...state,
				friends: action.payload
			};
		case UPDATE_FRIEND_INFO:
			return {
				...state,
				friends: action.payload
			};
		default:
			return state;
	}
};
