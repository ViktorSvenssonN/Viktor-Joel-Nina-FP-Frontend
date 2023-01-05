import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "components/Welcome";
import Login from "components/Login";
import Register from "components/Register";
import NotFound from "components/NotFound";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "reducers/user";
import birthdays from "reducers/birthdays";
import "./reset.css";
import "./index.css";

const reducer = combineReducers({
  user: user.reducer,
  birthdays: birthdays.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          {/* <Route path="/home" element={<ListView />}></Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
