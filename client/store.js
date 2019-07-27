import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import twittReducer from './reducers/twittReducer';

const rootReducer = combineReducers({
	twittReducer
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;
		
const enhancer = composeEnhancers(
	applyMiddleware(thunk)
)

const store = createStore(rootReducer, enhancer);
export default store;