import { InnerWrapper, OuterWrapper } from "Globalstyles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "reducers/user";
import WithHeader from "./WithHeader";
import styled from "styled-components/macro";

const ListView = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <ListOuterWrapper>
      <InnerWrapper>
        <h1>Welcome!</h1>
        <h2>Now you are logged in </h2>
        <button
          type="button"
          onClick={() => {
            dispatch(user.actions.setAccessToken(null));
            navigate("/login");
          }}
        >
          Log Out
        </button>
      </InnerWrapper>
    </ListOuterWrapper>
  );
};

export default WithHeader(ListView);

const ListOuterWrapper = styled(OuterWrapper)`
  background: var(--clr-background-light);
`;
