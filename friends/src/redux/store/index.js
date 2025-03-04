import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { saveTokenToBrowser } from '../middleware';

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, saveTokenToBrowser),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
