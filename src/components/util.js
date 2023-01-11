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



// export const age = () => {

//   const today = new Date();

//   var dd = String(today.getDate()).padStart(2, 0);
//   var mm = String(today.getMonth() + 1).padStart(2, 0); //January is 0!
//   var yyyy = today.getFullYear();
  
//   const getDate = `${yyyy}${mm}${dd}`;

//   const formattedBirthday = formatDate(new Date(birthday.birthDate))
//   .split("-")
//   .join("");

//   return (
//     (getDate - formattedBirthday + "").slice(0, 2)
//     )
// };

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
