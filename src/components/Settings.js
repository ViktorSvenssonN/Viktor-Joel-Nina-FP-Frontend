import React, { useEffect, useState } from "react";
import WithHeader from "./WithHeader";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components/macro";
import {
  OuterWrapper,
  InnerWrapper,
  ButtonLoginSignUp,
  ContainerButtonLoginSignUp,
  LoginInLinkContainer,
  Form,
  FormOuterContainer,
  FormInnerContainer,
  FormHeaderContainer,
  FormHeader,
  LabelSubHeader,
  InputContainer,
} from "Globalstyles";
import trash from "../images/icons/trash.svg";
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

  const handleDeleteUser = (event) => {
    event.preventDefault();
    const confirm = window.confirm(
      "Are you sure you want to delete your user? This action is irreversible"
    );
    if (confirm) {
      // batch(() => {
      //   dispatch(user.actions.setUsername(null));
      //   dispatch(user.actions.setId(null));
      //   dispatch(user.actions.setAccessToken(null));
      // });
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
      <ClonedInnerWrapper>
        <ClonedFormOuterContainer>
          <FormHeaderContainer>
            <FormHeader>CHANGE PASSWORD</FormHeader>
          </FormHeaderContainer>
          <FormInnerContainer>
            <Form onSubmit={onFormSubmit}>
              <LabelSubHeader htmlFor="password">New password: </LabelSubHeader>
              <InputContainer
                type="password"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <LabelSubHeader htmlFor="confirmPassword">
                Confirm new password:{" "}
              </LabelSubHeader>
              <ConfirmPasswordContainer
                isSame={confirmPassword === password}
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <ContainerButtonLoginSignUp>
                <ButtonLoginSignUp type="submit">CONFIRM</ButtonLoginSignUp>
              </ContainerButtonLoginSignUp>
            </Form>
          </FormInnerContainer>
        </ClonedFormOuterContainer>
      </ClonedInnerWrapper>
      <ClonedInnerWrapperDelete>
        <ClonedFormDeleteOuterContainer>
          <FormHeaderContainer>
            <FormHeader>DANGEROUS AREA</FormHeader>
          </FormHeaderContainer>
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
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 55%;
  margin-top: 25%;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
`;

const ClonedInnerWrapperDelete = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 43%;
  justify-content: flex-end;
  position: absolute;
  z-index: 2;
  top: 57%;
`;

const ClonedFormOuterContainer = styled(FormOuterContainer)`
  border-radius: 45px;
`;

const ClonedFormDeleteOuterContainer = styled(FormOuterContainer)`
  border-radius: 45px 45px 0px 0px;
  background: #e3c0ab;
  box-shadow: 0px -1px 9px 1px var(--clr-text-dark);
`;

const ClonedLabelSubHeader = styled(LabelSubHeader)`
  font-size: 1.2rem;
`;

const ClonedInputContainer = styled(InputContainer)`
  margin-bottom: 0;
  border-radius: 15px;
  border: none;
  height: 3rem;
  padding-left: 0;
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
