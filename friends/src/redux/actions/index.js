import { CustomizedAxios } from '../../axios';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

// Action Types
export const SET_ACTION_STATUS = 'SET_ACTION_STATUS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const ADD_FRIENDS = 'ADD_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND_INFO = 'UPDATE_FRIEND_INFO';

//Action dispatchers
export const fetchFriends = () => {
	return dispatch => {
		console.log(dispatch);
	};
};

export const login = credentials => dispatch => {
	// Dispatch loggedIn status
	dispatch({
		type: SET_ACTION_STATUS,
		payload: {
			loggingIn: true
		}
	});

	return axios
		.post(`${BASE_URL}/api/login`, credentials)
		.then(res => {
			// Save token to local storage
			localStorage.setItem('token', res.data.payload);

			// Dispatch loggedIn status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: {
					loggingIn: false
				}
			});

			dispatch({
				type: SET_ACTION_STATUS,
				payload: {
					loggedIn: true
				}
			});

			return res;
		})
		.catch(err => {
			// Dispatch loggedIn status
			dispatch({
				type: SET_ACTION_STATUS,
				payload: {
					loggingIn: false
				}
			});

			dispatch({
				type: SET_ACTION_STATUS,
				payload: {
					error: err.response.data.error
				}
			});

			return err;
		});
};
