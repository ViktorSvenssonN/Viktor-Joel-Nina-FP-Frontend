// Should be used for both creating new birthday, and edit, with props to change some labels
import { OuterWrapper } from "Globalstyles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import user from "reducers/user";
import styled from "styled-components/macro";
import WithHeader from "../WithHeader";
import closeIcon from "images/icons/close.svg";
import checkmarkIcon from "images/icons/checkmark.svg";
import { randomInt } from "../util";
import CreateEditContentWrapper from "./CreateEditContentWrapper";
import { API_URL } from "utils/utils";

const BirthdayCreateEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.id);
  const icons = useSelector((store) => store.ui.icons);
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

  const optionsGet = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
  };

  const fetchBirthday = () => {
    /*    setLoading(true); */
    fetch(API_URL(`birthday/${id}`), optionsGet)
      .then((res) => res.json())
      .then((data) => setBirthdayInfo(data))
      .catch((error) => console.error(error));
    /*       .finally(() => setLoading(false)); */
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

  const optionsPost = {
    method: editMode ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({
      firstName,
      lastName,
      birthDate,
      otherInfo,
      birthdayReminderSettings,
      ...(editMode ? { id } : { userId }),
    }),
  };

  const postBirthday = () => {
    fetch(API_URL("birthday"), optionsPost)
      .then((res) => res.json())
      .then(() =>
        alert(
          `Successfully ${editMode ? "updated" : "created"} birthday reminder!`
        )
      )
      .then(() => navigate(`${editMode ? `/view/${id}` : "/home"}`))
      .catch((error) => console.error(error));
  };

  const onFormSubmit = (e) => {
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

const ClonedOuterWrapper = styled(OuterWrapper)`
  align-items: flex-end;
`;

const FormWrapper = styled.form`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
`;

const BirthdayHeader = styled.header`
  font-family: var(--font-second);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  border-radius: 50px 50px 0 0;
  background: var(--clr-background-register);
  color: var(--clr-text-dark);

  img {
    cursor: pointer;
    height: 32px;
    width: 32px;
    transition: 0.2s;
    filter: invert(19%) sepia(8%) saturate(1926%) hue-rotate(195deg)
      brightness(94%) contrast(92%);
    &:hover {
      transform: scale(1.1) translateX(2px);
      transition: 0.2s;
    }
  }
`;

const HeaderText = styled.p`
  font-family: var(--font-second);
`;

const HeaderButton = styled.button`
  background: none;
  border: none;
`;
