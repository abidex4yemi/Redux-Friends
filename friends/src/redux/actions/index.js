import { CustomizedAxios } from '../../axios';
import axios from 'axios';

// Action Types
export const SET_ACTION_STATUS = 'FAILURE';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const ADD_FRIENDS = 'ADD_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND_INFO = 'UPDATE_FRIEND_INFO';

//Action dispatchers
export const fetchFriends = ({ username, password }) => {
	return dispatch => {
		console.log(username, password, dispatch);
	};
};
