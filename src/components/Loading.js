import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components/macro";
import balloons from "./Lotties/balloons.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: balloons,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <LottieWrapper>
      <Lottie options={defaultOptions} />
    </LottieWrapper>
  );
};

export default Loading;

const LottieWrapper = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
`;
