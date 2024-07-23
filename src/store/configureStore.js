import { applyMiddleware, legacy_createStore as createStore, compose, combineReducers } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension';
import booksReducer from "./books";
import usersReducer from "./users";

const reducers = combineReducers({
  books: booksReducer,
  users: usersReducer,
});

const middlewares = [logger];

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
