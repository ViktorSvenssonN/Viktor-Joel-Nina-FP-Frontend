import { differenceInDays } from "date-fns";

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

export const Age = () => {
  const bDay = `${formatDate(new Date(birthday.birthDate))}`
  const today = new Date()
  const date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
  
  const distance = bDay.getTime() - tday.getTime();
  const daysOld = Math.floor(distance / (1000*60*60*24));
  const yearsOld = Number((daysOld/365).toFixed());



  console.log("testing birth date in ListCard:", bDay)
  console.log("testing todays date in ListCard:", today)
  console.log("testing todays date yyyy-mm-dd in ListCard:", date)
  console.log("testing todays date yyyy-mm-dd in ListCard:", yearsOld)
}