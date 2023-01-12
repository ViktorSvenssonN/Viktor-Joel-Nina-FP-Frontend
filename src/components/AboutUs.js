import { OuterWrapper } from "Globalstyles";
import React from "react";
import WithHeader from "./WithHeader";
import { ListOuterWrapper, ListInnerWrapper } from "./ListView";
import githubLogo from "images/icons/github.svg";
import linkedinLogo from "images/icons/linkedin.svg";
import styled from "styled-components/macro";
import Loading from "./Loading";

const AboutUs = () => {
  return (
    <OuterWrapper>
      <ListOuterWrapper>
        <AboutInnerWrapper>
          <AboutCardWrapper>
            <ImageContainer>hej</ImageContainer>
            <AboutInfo>
              <h1>This is us!</h1>
              <p>We are cool</p>
              <p>We are hip</p>
              <p>We are happening</p>
              <p>We are Remindyo!</p>
              <a href="https://linkedin.com" target="_blank">
                <img src={linkedinLogo} />
              </a>
            </AboutInfo>
          </AboutCardWrapper>
          <AboutCardWrapper>
            <ImageContainer>hej</ImageContainer>
            <AboutInfo>
              <h1>This is us!</h1>
              <p>We are cool</p>
              <p>We are hip</p>
              <p>We are happening</p>
              <p>We are Remindyo!</p>
              <a href="https://linkedin.com" target="_blank">
                <img src={linkedinLogo} />
              </a>
            </AboutInfo>
          </AboutCardWrapper>
          <AboutCardWrapper>
            <ImageContainer>hej</ImageContainer>
            <AboutInfo>
              <h1>This is us!</h1>
              <p>We are cool</p>
              <p>We are hip</p>
              <p>We are happening</p>
              <p>We are Remindyo!</p>
              <a href="https://linkedin.com" target="_blank">
                <img src={linkedinLogo} />
              </a>
            </AboutInfo>
          </AboutCardWrapper>
        </AboutInnerWrapper>
        <Loading />
      </ListOuterWrapper>
    </OuterWrapper>
  );
};

export default WithHeader(AboutUs);

const AboutInnerWrapper = styled(ListInnerWrapper)`
  justify-content: space-evenly;
  color: var(--clr-text-dark);
  backdrop-filter: blur(3px);
  z-index: 6;
`;

const AboutCardWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 25%;
  border: none;
  border-radius: 25px;
  box-shadow: 6px 7px 1px #a0afbb;
`;

// const AboutCard = styled.div`
//   display: flex;
// `;

const ImageContainer = styled.div`
  background-color: var(--clr-bg);
  display: flex;
  width: 35%;
  justify-content: center;
  align-items: center;
  border-radius: 25px 0 0 25px;
`;

const AboutInfo = styled.div`
  background-color: var(--clr-header-light);
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 25px 25px 0;
`;
