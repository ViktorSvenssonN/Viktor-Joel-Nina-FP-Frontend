import React, { useEffect, useState } from "react";
import WithHeader from "../WithHeader";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import backarrow from "images/icons/arrow-thin-left.svg";
import trash from "images/icons/trash.svg";
import editPencil from "images/icons/edit-pencil.svg";
import { fetchOptions, formatDate, randomInt } from "../util";
import { API_URL } from "../util";
import ReminderSettingsContainer from "./ReminderSettingsContainer";
import Loading from "components/Loading";
import {
  BirthdayHeader,
  BirthdayRightsideicons,
  ClonedOuterWrapper,
  FormWrapper,
  HeaderButton,
  HeaderText,
  ContentWrapper,
  TextParagraph,
  BirthDateContainer,
  DateShower,
  NotesContainer,
} from "./Styles";

const BirthdayDetailView = () => {
  const icons = useSelector(store => store.ui.icons);
  const [icon, setIcon] = useState(null);
  const [birthday, setBirthday] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const accessToken = useSelector(store => store.user.accessToken);
  const navigate = useNavigate();

  const { firstName, lastName, otherInfo } = birthday;

  const { id } = params;

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setIcon(icons[randomInt(icons.length)]);
  }, []);

  const fetchBirthday = () => {
    fetch(API_URL(`birthday/${id}`), fetchOptions("GET", accessToken))
      .then(res => res.json())
      .then(data => setBirthday(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const deleteBirthday = () => {
    fetch(
      API_URL(`birthday`),
      fetchOptions("DELETE", accessToken, JSON.stringify({ id }))
    )
      .then(res => res.json())
      .then(() => localStorage.setItem("deletedBirthday", "true"))
      .then(() => navigate("/home"))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchBirthday();
  }, []);

  const onBackClick = () => {
    navigate("/home");
  };

  const onDeleteClick = () => {
    const cancel = window.confirm(
      "Are you sure you want to delete this birthday reminder?"
    );
    if (cancel) deleteBirthday();
  };

  const onEditClick = () => {
    navigate(`/edit/${birthday._id}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ClonedOuterWrapper>
      <FormWrapper>
        <BirthdayHeader view={true}>
          <HeaderButton type="button" onClick={onBackClick}>
            <img src={backarrow} alt="back" />
          </HeaderButton>
          <HeaderText>View birthday reminder</HeaderText>
          <BirthdayRightsideicons>
            <HeaderButton type="button" onClick={onDeleteClick}>
              <img src={trash} alt="OK" />
            </HeaderButton>
            <HeaderButton type="button" onClick={onEditClick}>
              <img src={editPencil} alt="edit" />
            </HeaderButton>
          </BirthdayRightsideicons>
        </BirthdayHeader>
        <ContentWrapper>
          <img src={icon} />
          <TextParagraph> {firstName} </TextParagraph>
          <TextParagraph> {lastName}</TextParagraph>
          <BirthDateContainer>
            <p>Birthdate</p>
            <DateShower>{formatDate(new Date(birthday.birthDate))}</DateShower>
          </BirthDateContainer>
          <NotesContainer>
            Gift ideas:
            <br />- {otherInfo}
          </NotesContainer>
          <ReminderSettingsContainer
            birthdayReminderSettings={birthday.birthdayReminderSettings}
            handleSettingsChange={() => null}
          />
        </ContentWrapper>
      </FormWrapper>
    </ClonedOuterWrapper>
  );
};

export default WithHeader(BirthdayDetailView);
