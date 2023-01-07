import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "reducers/user";
import ui from "reducers/ui";
import birthdays from "reducers/birthdays";
import "./index.css";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

const reducer = combineReducers({
  user: user.reducer,
  birthdays: birthdays.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
