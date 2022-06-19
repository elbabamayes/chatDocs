import React from 'react';
import {View, Text} from 'react-native';
import CallActionBox from '../../components/callActionBox';

import styles from './style';
const Call = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}></View>
      <CallActionBox />
    </View>
  );
};

export default Call;
