import axios from 'axios';
import { customizedAxios } from '../../../axios';
import { SET_ACTION_STATUS, DELETE_FRIEND, ADD_FRIENDS } from '../types';

const BASE_URL = 'http://localhost:5000';

//Action dispatchers
export const deleteFriend = id => dispatch => {
	dispatch({
		type: SET_ACTION_STATUS,
		payload: { removingFriend: true }
	});

	return customizedAxios()
		.delete(`${BASE_URL}/api/friends/${id}`)
		.then(res => {
			// Dispatch savingFriend status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { removingFriend: false }
			});

			// Dispatch add_friends status
			dispatch({
				type: DELETE_FRIEND,
				payload: res.data
			});

			return res;
		})
		.catch(err => {
			// Dispatch loggedIn status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { removingFriend: false }
			});

			// Dispatch error status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { error: err.response.data.error }
			});
		});
};

export const addFriend = newFriend => dispatch => {
	dispatch({
		type: SET_ACTION_STATUS,
		payload: { savingFriend: true }
	});

	return customizedAxios()
		.post(`${BASE_URL}/api/friends`, newFriend)
		.then(res => {
			// Dispatch savingFriend status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { savingFriend: false }
			});

			// Dispatch add_friends status
			dispatch({
				type: ADD_FRIENDS,
				payload: res.data
			});

			return res;
		})
		.catch(err => {
			// Dispatch loggedIn status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { savingFriend: false }
			});

			// Dispatch error status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { error: err.response.data.error }
			});
		});
};

export const fetchFriends = () => dispatch => {
	dispatch({
		type: SET_ACTION_STATUS,
		payload: { fetchingFriends: true }
	});

	customizedAxios()
		.get(`${BASE_URL}/api/friends`)
		.then(res => {
			// Dispatch loggedIn status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { fetchingFriends: false }
			});

			// Dispatch loggedIn status
			dispatch({
				type: ADD_FRIENDS,
				payload: res.data
			});
		})
		.catch(err => {
			// Dispatch loggedIn status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { fetchingFriends: false }
			});

			// Dispatch error status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { error: err.response.data.error }
			});
		});
};

export const login = credentials => dispatch => {
	// Dispatch loggedIn status
	dispatch({
		type: SET_ACTION_STATUS,
		payload: { loggingIn: true }
	});

	return axios
		.post(`${BASE_URL}/api/login`, credentials)
		.then(res => {
			// Dispatch loggedIn status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { loggingIn: false, token: res.data.payload }
			});

			return res;
		})
		.catch(err => {
			// Dispatch loggedIn status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: { loggingIn: false }
			});

			dispatch({
				type: SET_ACTION_STATUS,
				payload: { error: err.response.data.error }
			});

			return err;
		});
};
