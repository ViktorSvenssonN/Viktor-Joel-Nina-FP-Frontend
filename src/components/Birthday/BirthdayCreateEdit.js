import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import WithHeader from "../WithHeader";
import closeIcon from "images/icons/close.svg";
import checkmarkIcon from "images/icons/checkmark.svg";
import { fetchOptions, randomInt } from "../util";
import CreateEditContentWrapper from "./CreateEditContentWrapper";
import { API_URL } from "../util";
import {
  ClonedOuterWrapper,
  FormWrapper,
  BirthdayHeader,
  HeaderButton,
  HeaderText,
} from "./Styles";

const BirthdayCreateEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const accessToken = useSelector(store => store.user.accessToken);
  const userId = useSelector(store => store.user.id);
  const icons = useSelector(store => store.ui.icons);
  const editMode = location.pathname.includes("edit");

  const [icon, setIcon] = useState(null);
  const [birthdayInfo, setBirthdayInfo] = useState({
    birthdayReminderSettings: [],
  });
  const {
    firstName,
    lastName,
    birthDate,
    otherInfo,
    birthdayReminderSettings,
  } = birthdayInfo;

  const { id } = params;

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  const fetchBirthday = () => {
    fetch(API_URL(`birthday/${id}`), fetchOptions("GET", accessToken))
      .then(res => res.json())
      .then(data => setBirthdayInfo(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    if (editMode) {
      fetchBirthday();
    }
  }, []);

  useEffect(() => {
    setIcon(icons[randomInt(icons.length)]);
  }, []);

  const onFormCancel = () => {
    const cancel = window.confirm(
      `Are you sure you want to discard ${
        editMode ? "the changes to" : ""
      } this birthday reminder?`
    );
    if (cancel) navigate(`${editMode ? `/view/${id}` : "/home"}`);
  };

  const postBirthday = () => {
    fetch(
      API_URL("birthday"),
      fetchOptions(
        editMode ? "PATCH" : "POST",
        accessToken,
        JSON.stringify({
          firstName,
          lastName,
          birthDate,
          otherInfo,
          birthdayReminderSettings,
          ...(editMode ? { id } : { userId }),
        })
      )
    )
      .then(res => res.json())
      .then(() =>
        alert(
          `Successfully ${editMode ? "updated" : "created"} birthday reminder!`
        )
      )
      .then(() => navigate(`${editMode ? `/view/${id}` : "/home"}`))
      .catch(error => console.error(error));
  };

  const onFormSubmit = e => {
    e.preventDefault();
    postBirthday();
  };
  return (
    <ClonedOuterWrapper>
      <FormWrapper onSubmit={onFormSubmit}>
        <BirthdayHeader>
          <HeaderButton type="button" onClick={onFormCancel}>
            <img src={closeIcon} alt="cancel" />
          </HeaderButton>
          <HeaderText>{editMode ? "Edit" : "Add"} birthday reminder</HeaderText>
          <HeaderButton type="submit">
            <img src={checkmarkIcon} alt="OK" />
          </HeaderButton>
        </BirthdayHeader>
        <CreateEditContentWrapper
          icon={icon}
          setBirthdayInfo={setBirthdayInfo}
          birthdayInfo={birthdayInfo}
          editMode={editMode}
        />
      </FormWrapper>
    </ClonedOuterWrapper>
  );
};

export default WithHeader(BirthdayCreateEdit);
