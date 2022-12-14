import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "./util";
import { useNavigate } from "react-router-dom";
import ListView from "./ListView";
import StartState from "./StartState";
import { fetchOptions } from "./util";
import Loading from "./Loading";

const Start = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const id = useSelector((store) => store.user.id);
  const [birthdays, setBirthdays] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  const fetchBirthday = () => {
    fetch(API_URL(`all-birthdays/${id}`), fetchOptions("GET", accessToken))
      .then((res) => res.json())
      .then((data) => setBirthdays(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBirthday();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {birthdays.length > 0 && <ListView birthdays={birthdays} />}
      {birthdays.length < 1 && <StartState />}
    </>
  );
};

export default Start;
