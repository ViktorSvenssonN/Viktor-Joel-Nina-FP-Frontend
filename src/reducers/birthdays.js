import { createSlice } from "@reduxjs/toolkit";

const birthdays = createSlice({
  name: "birthdays",
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
    birthDate: null,
    userId: "",
    birthdayReminderSettings: [],
    otherInfo: "",
  },
  reducers: {
    setId: (store, action) => {
      store.id = action.payload;
    },
    setFirstName: (store, action) => {
      store.firstName = action.payload;
    },
    setLastName: (store, action) => {
      store.lastName = action.payload;
    },
    setBirthDate: (store, action) => {
      store.birthDate = action.payload;
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setBirthdayReminderSettings: (store, action) => {
      store.birthdayReminderSettings = action.payload;
    },
    setOtherInfo: (store, action) => {
      store.otherInfo = action.payload;
    },
  },
});

export default birthdays;
