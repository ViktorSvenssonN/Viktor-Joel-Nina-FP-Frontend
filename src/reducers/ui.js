import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    setMenuOpen: (store, action) => {
      store.menuOpen = action.payload;
    },
  },
});

export default ui;
