import calculateAge from "calculate-age";
import { differenceInDays } from "date-fns";

const BASE_URL = "https://email-sender-pw346p3yuq-lz.a.run.app";

export const API_URL = (slug) => `${BASE_URL}/${slug}`;

export const randomInt = (length) => Math.floor(Math.random() * length);

export const formatDate = (birthDate) => {
  if (!birthDate) return;

  const day = String(birthDate.getDate()).padStart(2, 0);
  const month = String(birthDate.getMonth() + 1).padStart(2, 0); // getMonth() starts at 0
  const year = birthDate.getFullYear();

  return `${year}-${month}-${day}`;
};

export const fetchOptions = (method, accessToken, body) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    ...(body ? { body } : {}),
  };
};

export const convertDate = (birthDate) => {
  const day = String(birthDate.getDate()).padStart(2, 0);
  const month = String(birthDate.getMonth() + 1).padStart(2, 0); // getMonth() starts at 0

  // If birthday is in January, but today is December, add 1 year to converted year
  // Since 30 days is the maximum setting, only do this for January
  const convertedYear =
    month === "01" && new Date().getMonth() !== 0
      ? new Date().getFullYear() + 1
      : new Date().getFullYear();

  return new Date(`${convertedYear}-${month}-${day}`);
};

export const getAge = (birthday) =>
  new calculateAge(birthday, new Date()).getObject().years;

export const getDifference = (birthday) => {
  const convertedBirthday = convertDate(new Date(birthday));
  return differenceInDays(convertedBirthday, new Date());
};

export const getBirthdayText = (age, difference) => {
  if (age > 0) {
    return `${
      difference >= 0
        ? `Turns ${difference > 0 ? +age + 1 : age}`
        : `Turned ${age}`
    } years old ${difference === 0 ? "today 🥳" : ""}`;
  } else if (difference < 0) {
    return "Not born yet 👶";
  } else {
    return `Turns ${age + 1} year old`;
  }
};

export const getSettingText = (setting) => {
  if (setting === 0) {
    return "Same day";
  }
  if (setting === 2) {
    return "2 days";
  }
  if (setting === 7) {
    return "1 week";
  }
  if (setting === 30) {
    return "1 month";
  }
};
