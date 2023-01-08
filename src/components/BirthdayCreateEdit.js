// Should be used for both creating new birthday, and edit, with props to change some labels
import { InnerWrapper, OuterWrapper } from "Globalstyles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import user from "reducers/user";
import styled from "styled-components/macro";
import WithHeader from "./WithHeader";
import closeIcon from "../images/icons/close.svg";
import checkmarkIcon from "../images/icons/checkmark.svg";

const BirthdayCreateEdit = () => {
  const location = useLocation();

  const mode = location.pathname.includes("create") ? "create" : "edit";

  // use the id to look up birthday from API/Redux
  const params = useParams();
  const { id } = params;

  console.log("mode:", mode);

  useEffect(() => {
    if (location.pathname.includes("create")) {
      console.log("create");
    }
    if (mode === "edit") {
      // TODO
      // If in Edit mode, get the birthday info with matching Id from params from API or redux
      console.log("edit");
    }
    console.log(location);
  }, []);

  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const icons = useSelector((store) => store.ui.icons);
  const navigate = useNavigate();

  console.log(icons);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <ClonedOuterWrapper>
      <ClonedInnerWrapper>
        <BirthdayHeader>
          <img src={closeIcon} alt="cancel" />
          <p>add birthday</p>
          <img src={checkmarkIcon} alt="OK" />
        </BirthdayHeader>
        <TheRest>
          <img src={icons[3]} />
          <p>birthdayedit and shit yo!</p>
        </TheRest>
      </ClonedInnerWrapper>
    </ClonedOuterWrapper>
  );
};

export default WithHeader(BirthdayCreateEdit);

const ClonedOuterWrapper = styled(OuterWrapper)`
  // css
  align-items: flex-end;
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
`;

const BirthdayHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  border-radius: 50px 50px 0 0;
  background: var(--clr-background-register);
  color: var(--clr-text-dark);

  img {
    height: 32px;
    width: 32px;
    filter: invert(19%) sepia(8%) saturate(1926%) hue-rotate(195deg)
      brightness(94%) contrast(92%);
  }
`;

const TheRest = styled.section`
  height: 90%;
  background: var(--clr-background-light);
`;
