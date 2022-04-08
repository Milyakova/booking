import commentsReducer from "./comments";
import categoriesReducer from "./categories";
import qualitiesReducer from "./qualities";
import usersReducer from "./users";
import roomsReducer from "./rooms";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  qualities: qualitiesReducer,
  categories: categoriesReducer,
  rooms: roomsReducer,
  users: usersReducer,
  comments: commentsReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
