import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

//combine reducers --> need to import reducers
import userReducer from './reducers/user'
import listReducer from './reducers/list'
import postReducer from './reducers/post'
import photoReducer from './reducers/photo'

let combine = combineReducers({
	users: userReducer,
	lists: listReducer,
	posts: postReducer,
	photos: photoReducer

});

//for using redux dev tool with middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//with middleware (using applyMiddleware and createLogger)
const store = createStore(combine, composeEnhancers(applyMiddleware(createLogger({collapsed: true}), thunkMiddleware)));

export default store;