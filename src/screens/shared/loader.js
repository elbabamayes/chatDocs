import React from 'react';
import LottieView from 'lottie-react-native';
const WaitingLoader = () => (
  <LottieView
    source={require('../../../assets/pageLoader/66731-loading.json')}
    autoPlay
    loop
  />
);

export default WaitingLoader;
