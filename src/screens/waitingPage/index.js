import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import WaitingLoader from '../shared/loader';
import styles from './style';

const WaitingPageScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Your will be sent as soon as possible helped by our doctor‏ ‬‏
        </Text>
        <WaitingLoader />
      </SafeAreaView>
    </>
  );
};
export default WaitingPageScreen;
