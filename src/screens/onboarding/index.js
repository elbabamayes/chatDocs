import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
import {logo} from '../../images';
import styles from './style';

const Skip = ({...props}) => (
  <TouchableOpacity
    style={styles.buttonContainer}
    onPress={() => props?.onPress()}>
    <Text style={styles.button}> Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
    style={styles.buttonContainer}
    onPress={() => props?.onPress()}>
    <Text style={styles.button}> Next</Text>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? '#3C67AF' : '#757575';
  return <View style={[styles.Dot, {backgroundColor}]} />;
};

const OnboardingScreen = () => {
  const {navigate} = useNavigation();
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DotComponent={Dots}
      onSkip={() => navigate('login')}
      onDone={() => navigate('login')}
      subTitleStyles={styles.text}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={logo} style={styles.logo} />,
          title: '',
          subtitle:
            'Chat Arts application helps you for an online consultation to be carried out with a general practitioner via video call. You can after the call consult all necessary documents and download.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={logo} style={styles.logo} />,
          title: '',
          subtitle:
            'We are available to help you Every working day from 7 am to 12 am. You can confirm your live location and get the hulpfull help from the doctor.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
