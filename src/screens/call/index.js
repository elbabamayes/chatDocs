import React from 'react';
import {View} from 'react-native';
import CallActionBox from '../../components/callActionBox';
import styles from './style';

// Call Screen
const Call = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}></View>
      <CallActionBox />
    </View>
  );
};

export default Call;
