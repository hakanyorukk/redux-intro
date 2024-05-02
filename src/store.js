// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//configure store automatically combine our reducers
// automatically add the Thunk middleware,
//and setup developer tools
const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;
