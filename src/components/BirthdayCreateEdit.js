// Should be used for both creating new birthday, and edit, with props to change some labels
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "reducers/user";
import WithHeader from "./WithHeader";

const BirthdayCreateEdit = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <p>birthdayedit and shit yo!</p>
    </div>
  );
};

export default WithHeader(BirthdayCreateEdit);
