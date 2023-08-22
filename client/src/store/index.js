import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "./reducers/authSlice";
import searchReducer from "./reducers/searchSlice";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("applicationState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    search: searchReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: loadFromLocalStorage(),
});

export default store;
