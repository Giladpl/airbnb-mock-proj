import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { stayReducer } from './reducers/stayReducer';
import { userReducer } from './reducers/userReducer';
import { orderReducer } from './reducers/orderReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	stayReducer,
	userReducer,
	orderReducer,
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
