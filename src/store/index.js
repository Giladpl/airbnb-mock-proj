import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { stayReducer } from './reducers/stayReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	stayReducer,
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
