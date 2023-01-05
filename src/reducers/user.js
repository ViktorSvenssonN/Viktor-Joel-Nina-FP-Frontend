import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
    password: "",
    accessToken: "",
  },
  reducers: {
    setId: (store, action) => {
      store.id = action.payload;
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setPassword: (store, action) => {
      store.password = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
  },
});

export default user;
