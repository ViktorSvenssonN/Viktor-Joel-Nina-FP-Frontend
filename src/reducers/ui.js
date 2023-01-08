import { createSlice } from "@reduxjs/toolkit";
import icon1 from "../images/iconsR/icons-01.svg";
import icon2 from "../images/iconsR/icons-02.svg";
import icon3 from "../images/iconsR/icons-03.svg";
import icon4 from "../images/iconsR/icons-04.svg";
import icon5 from "../images/iconsR/icons-05.svg";
import icon6 from "../images/iconsR/icons-06.svg";
import icon7 from "../images/iconsR/icons-07.svg";
import icon8 from "../images/iconsR/icons-08.svg";
import icon9 from "../images/iconsR/icons-09.svg";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];

const ui = createSlice({
  name: "ui",
  initialState: {
    icons,
    menuOpen: false,
  },
  reducers: {
    setMenuOpen: (store, action) => {
      store.menuOpen = action.payload;
    },
  },
});

export default ui;
