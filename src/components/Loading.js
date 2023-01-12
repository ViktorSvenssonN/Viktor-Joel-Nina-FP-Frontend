import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components/macro';
import Ballons from '../lotties/Ballons.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Ballons,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <LottieWrapper>
      <Lottie options={defaultOptions} height={400} width={400} />
    </LottieWrapper>
  );
};

export default Loading;

const LottieWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;  
