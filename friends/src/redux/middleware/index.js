export const saveTokenToBrowser = store => next => action => {
	const token = action.payload.token;

	if (action.type === 'SET_ACTION_STATUS' && token) {
		// Save token to local storage
		localStorage.setItem('token', token);
	}
	next(action);
};
