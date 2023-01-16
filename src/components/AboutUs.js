import { OuterWrapper } from "Globalstyles";
import React from "react";
import WithHeader from "./WithHeader";
import { ListOuterWrapper, ListInnerWrapper } from "./ListView";
import githubLogo from "images/icons/github.svg";
import linkedinLogo from "images/icons/linkedin.svg";
import viktor from "images/viktor.jfif";
import nina from "images/nina.jfif";
import joel from "images/joel.jfif";
import styled from "styled-components/macro";
import Loading from "./Loading";

const AboutUs = () => {
  return (
    <OuterWrapper>
      <ListOuterWrapper>
        <AboutInnerWrapper>
          <AboutCardWrapper>
            <ImageContainer>
              <ProfilePicture src={viktor} />
            </ImageContainer>
            <AboutInfo>
              <Name>Viktor Svensson</Name>
              <Links>
                <a
                  href="https://www.linkedin.com/in/viktor-svensson-9a55891b2/"
                  target="_blank"
                >
                  <img src={linkedinLogo} />
                </a>
                <a href="https://github.com/ViktorSvenssonN" target="_blank">
                  <img src={githubLogo} />
                </a>
              </Links>
            </AboutInfo>
          </AboutCardWrapper>
          <AboutCardWrapper>
            <ImageContainer>
              <ProfilePicture src={nina} />
            </ImageContainer>
            <AboutInfo>
              <Name>Nina Berggren</Name>
              <Links>
                <a
                  href="https://www.linkedin.com/in/nina-berggren/"
                  target="_blank"
                >
                  <img src={linkedinLogo} />
                </a>
                <a href="https://github.com/NinaBerggren" target="_blank">
                  <img src={githubLogo} />
                </a>
              </Links>
            </AboutInfo>
          </AboutCardWrapper>
          <AboutCardWrapper>
            <ImageContainer>
              <ProfilePicture src={joel} />
            </ImageContainer>
            <AboutInfo>
              <Name>Joel Öhman</Name>
              <Links>
                <a
                  href="https://www.linkedin.com/in/joel-%C3%B6hman-b09307159/"
                  target="_blank"
                >
                  <img src={linkedinLogo} />
                </a>
                <a href="https://github.com/joeohm" target="_blank">
                  <img src={githubLogo} />
                </a>
              </Links>
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
  color: var(--clr-dark);
  backdrop-filter: blur(3px);
  z-index: 6;
`;

const AboutCardWrapper = styled.section`
  max-width: 400px;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 20%;
  border: none;
  border-radius: 25px;
  box-shadow: 6px 7px 1px #a0afbb;

  @media (min-width: 668px) {
    height: 25%;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  background-color: var(--clr-bg-gray);
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 25px 0 0 25px;
`;

const ProfilePicture = styled.img`
  height: 100%;
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--clr-powderblue);
  border-radius: 0 25px 25px 0;
`;

const Name = styled.h1`
  font-size: 24px;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
