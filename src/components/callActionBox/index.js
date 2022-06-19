import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();
const CallActionBox = ({onHangupPress}) => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const onReverseCamera = () => {
    console.log('onReverseCamera');
  };
  const onToggleCamera = () => {
    setIsCameraOn(currentValue => !currentValue);
  };
  const onToggleMicrophone = () => {
    setIsMicOn(currentValue => !currentValue);
  };
  
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name="ios-camera-reverse" size={30} color="white" />
      </Pressable>
      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <MaterialCommunityIcons
          name={isCameraOn ? 'camera-off' : 'camera'}
          size={30}
          color="white"
        />
      </Pressable>
      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MaterialCommunityIcons
          name={isMicOn ? 'microphone-off' : 'microphone'}
          size={30}
          color="white"
        />
      </Pressable>
      <Pressable
        onPress={onHangupPress}
        style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <MaterialCommunityIcons name="phone-hangup" size={30} color="white" />
      </Pressable>
    </View>
  );
};

export default CallActionBox;
