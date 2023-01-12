import { createSlice } from "@reduxjs/toolkit";
import icon1 from "../images/iconsR/iconsT-01.svg";
import icon2 from "../images/iconsR/iconsT-02.svg";
import icon3 from "../images/iconsR/iconsT-03.svg";
import icon4 from "../images/iconsR/iconsT-04.svg";
import icon5 from "../images/iconsR/iconsT-05.svg";
import icon6 from "../images/iconsR/iconsT-06.svg";
import icon7 from "../images/iconsR/iconsT-07.svg";
import icon8 from "../images/iconsR/iconsT-08.svg";
import icon9 from "../images/iconsR/iconsT-09.svg";

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
