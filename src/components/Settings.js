import React, { useEffect, useState } from "react";
import WithHeader from "./WithHeader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import {
  OuterWrapper,
  InnerWrapper,
  ButtonLoginSignUp,
  ContainerButtonLoginSignUp,
  Form,
  FormOuterContainer,
  FormInnerContainer,
  FormHeaderContainer,
  FormHeader,
  LabelSubHeader,
  InputContainer,
} from "Globalstyles";
import trash from "../images/icons/trash.svg";
import logOut from "../images/icons/logout.svg";
import { fetchOptions } from "./util";
import { API_URL } from "./util";
import { batch, useDispatch, useSelector } from "react-redux";
import user from "reducers/user";

const Settings = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.id);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      fetch(
        API_URL("change-password"),
        fetchOptions(
          "PATCH",
          accessToken,
          JSON.stringify({ id: userId, password })
        )
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.alert("Password successfully changed!");
            navigate("/home");
          }
        });
    } else {
      window.alert("Please ensure that your password confirmation matches");
    }
  };

  const onLogoutClick = () => {
    dispatch(user.actions.setAccessToken(null));
    navigate("/");
  };

  const handleDeleteUser = (event) => {
    event.preventDefault();
    const confirm = window.confirm(
      "Are you sure you want to delete your user? This action is irreversible"
    );
    if (confirm) {
      fetch(
        API_URL("user"),
        fetchOptions("DELETE", accessToken, JSON.stringify({ id: userId }))
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.alert(`User ${data.response.username} deleted!`);
            batch(() => {
              dispatch(user.actions.setUsername(null));
              dispatch(user.actions.setId(null));
              dispatch(user.actions.setAccessToken(null));
            });
            navigate("/");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <ClonedOuterWrapper>
      <ClonedInnerWrapperLogout>
        <ClonedFormLogOutOuterContainer>
          <ClonedFormHeaderContainer>
            <FormHeader>LOG OUT</FormHeader>
          </ClonedFormHeaderContainer>
          <FormInnerContainer>
            <Form>
              <DeleteAccountContainer>
                <ClonedLabelSubHeader htmlFor="log out">
                  Log out from account
                </ClonedLabelSubHeader>
              </DeleteAccountContainer>
              <ContainerButtonLoginSignUp>
                <ButtonLoginSignUp type="button" onClick={onLogoutClick}>
                  <StyledIcon src={logOut} />
                </ButtonLoginSignUp>
              </ContainerButtonLoginSignUp>
            </Form>
          </FormInnerContainer>
        </ClonedFormLogOutOuterContainer>
      </ClonedInnerWrapperLogout>
      <ClonedInnerWrapperDelete>
        <ClonedInnerWrapper>
          <ClonedFormOuterContainer>
            <ClonedFormHeaderContainer>
              <FormHeader>CHANGE PASSWORD</FormHeader>
            </ClonedFormHeaderContainer>
            <FormInnerContainer>
              <Form onSubmit={onFormSubmit}>
                <ClonedLabelSubHeader htmlFor="password">
                  New password:{" "}
                  <InputContainer
                    type="password"
                    id="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </ClonedLabelSubHeader>
                <ClonedLabelSubHeader htmlFor="confirmPassword">
                  Confirm new password:{" "}
                  <ConfirmPasswordContainer
                    isSame={confirmPassword === password}
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </ClonedLabelSubHeader>
                <ContainerButtonLoginSignUp>
                  <ButtonLoginSignUp type="submit">CONFIRM</ButtonLoginSignUp>
                </ContainerButtonLoginSignUp>
              </Form>
            </FormInnerContainer>
          </ClonedFormOuterContainer>
        </ClonedInnerWrapper>
        <ClonedFormDeleteOuterContainer>
          <ClonedFormHeaderContainer>
            <FormHeader>DANGEROUS AREA</FormHeader>
          </ClonedFormHeaderContainer>
          <FormInnerContainer>
            <Form>
              <DeleteAccountContainer>
                <ClonedLabelSubHeader htmlFor="deleteuser">
                  Delete Account
                </ClonedLabelSubHeader>
              </DeleteAccountContainer>
              <ContainerButtonLoginSignUp>
                <ButtonLoginSignUp type="button" onClick={handleDeleteUser}>
                  <StyledIcon src={trash} />
                </ButtonLoginSignUp>
              </ContainerButtonLoginSignUp>
            </Form>
          </FormInnerContainer>
        </ClonedFormDeleteOuterContainer>
      </ClonedInnerWrapperDelete>
    </ClonedOuterWrapper>
  );
};

export default WithHeader(Settings);

const ClonedOuterWrapper = styled(OuterWrapper)`
  flex-direction: column;
  background: var(--clr-bg);
  overflow: hidden;
  justify-content: unset;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 20%;
  justify-content: flex-start;
  position: relative;
  z-index: 1;

  @media (min-width: 668px) {
  }
`;

const ClonedInnerWrapperLogout = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30%;
  margin-top: 5%;
  justify-content: flex-end;
  position: relative;
  z-index: 1;

  @media (min-width: 668px) {
    height: 40%;

    width: 85%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }

  @media (min-width: 2000px) {
    margin-top: 10%;
  }
`;

const ClonedInnerWrapperDelete = styled(InnerWrapper)`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
  justify-content: flex-end;
  position: absolute;
  top: 5%;

  @media (min-width: 668px) {
    width: 68%;
    top: 20%;
  }

  @media (min-width: 1024px) {
    width: 42%;
  }
`;

const ClonedFormHeaderContainer = styled(FormHeaderContainer)`
  @media (min-width: 668px) {
    margin-bottom: 1%;
    margin-right: unset;
    margin-top: 3%;
  }
`;

const ClonedFormLogOutOuterContainer = styled(FormOuterContainer)`
  max-width: 500px;
  border-radius: 45px 45px 0px 0px;
  background: var(--clr-bg-login);
  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ClonedFormOuterContainer = styled(FormOuterContainer)`
  border-radius: 45px;
  box-shadow: 0px -1px 9px 1px var(--clr-text-dark);
  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ClonedFormDeleteOuterContainer = styled(FormOuterContainer)`
  border-radius: 45px 45px 0px 0px;
  background: #e3c0ab;
  box-shadow: 0px -1px 9px 1px var(--clr-text-dark);

  height: 85%;
  position: absolute;
  z-index: 4;
  top: 65%;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 55%;
  }
`;

const ClonedLabelSubHeader = styled(LabelSubHeader)`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`;

const DeleteAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5%;
  padding-top: 4%;
`;

const StyledIcon = styled.img`
  cursor: pointer;
  height: 28px;
  width: 32px;
  transition: 0.2s;
  filter: invert(19%) sepia(8%) saturate(1926%) hue-rotate(195deg)
    brightness(94%) contrast(92%);
  &:hover {
    transform: scale(1.1) translateX(2px);
    transition: 0.2s;
  }
`;

const ConfirmPasswordContainer = styled(InputContainer)`
  border: ${(props) => (props?.isSame ? "none" : "1px red solid")};
`;
