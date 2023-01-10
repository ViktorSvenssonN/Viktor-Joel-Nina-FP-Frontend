import React from "react";
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

const Settings = () => {
  return (
    <ClonedOuterWrapper>
      <ClonedInnerWrapper>
        <ClonedFormOuterContainer>
          <FormHeaderContainer>
            <FormHeader>CHANGE PASSWORD</FormHeader>
          </FormHeaderContainer>
          <FormInnerContainer>
            <Form>
              <LabelSubHeader htmlFor="password">Password: </LabelSubHeader>
              <InputContainer
                type="password"
                id="password"
                /*           value={password}
              required
              onChange={(e) => setPassword(e.target.value)} */
              />
              <LabelSubHeader htmlFor="password">
                Confirm password:{" "}
              </LabelSubHeader>
              <InputContainer
                type="password"
                id="confirmPassword"
                /*               value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)} */
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
