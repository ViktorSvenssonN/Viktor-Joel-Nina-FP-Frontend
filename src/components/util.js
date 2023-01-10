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
