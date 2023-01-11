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
import { useSelector } from "react-redux";

const Settings = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
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
      <ClonedInnerWrapper>
        <ClonedFormDeleteOuterContainer>
          <FormHeaderContainer>
            <FormHeader>DANGEROUS AREA</FormHeader>
          </FormHeaderContainer>
          <FormInnerContainer>
            <Form>
              <DeleteAccountContainer>
                <ClonedInputContainer
                  type="checkbox"
                  id="deleteuser"
                  placeholder="Delete account"
                  required
                  /*           value={password}
                required
                onChange={(e) => setPassword(e.target.value)} */
                />
                <ClonedLabelSubHeader htmlFor="password">
                  Delete Account
                </ClonedLabelSubHeader>
              </DeleteAccountContainer>
              <ContainerButtonLoginSignUp>
                <ButtonLoginSignUp type="submit">
                  <StyledIcon src={trash} />
                </ButtonLoginSignUp>
              </ContainerButtonLoginSignUp>
            </Form>
          </FormInnerContainer>
        </ClonedFormDeleteOuterContainer>
      </ClonedInnerWrapper>
    </ClonedOuterWrapper>
  );
};

export default WithHeader(Settings);

const ClonedOuterWrapper = styled(OuterWrapper)`
  flex-direction: column;
  background: var(--clr-background);
  overflow: hidden;
  justify-content: unset;
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 45%;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
`;

const ClonedFormOuterContainer = styled(FormOuterContainer)`
  border-radius: 45px;
`;

const ClonedFormDeleteOuterContainer = styled(FormOuterContainer)`
  border-radius: 45px;
  background: #e3c0ab;
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
