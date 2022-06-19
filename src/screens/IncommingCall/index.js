import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Voximplant} from 'react-native-voximplant';
import {ios_background} from '../../images';
import styles from './style';

Ionicons.loadFont();
Entypo.loadFont();
Feather.loadFont();

const IncommingCall = () => {
  const [caller, setCaller] = useState(null);
  const voximplant = Voximplant.getInstance();
  const {params} = useRoute();
  const {navigate} = useNavigation();
  const {call} = params;
  const onAccept = () => {
    navigate('calling', {
      call,
      isIncomingCall: true,
    });
  };
  const onDecline = () => {
    call.decline();
  };

  useEffect(() => {
    setCaller(call.getEndpoints()[0].displayName);
    call.on(Voximplant.CallEvents.Disconnected, callEvent => {
      navigate('home');
    });
    return () => {
      call.off(Voximplant.CallEvents.Disconnected);
    };
  }, []);

  return (
    <View style={styles.root}>
      <ImageBackground source={ios_background} style={styles.bg}>
        <Text style={styles.name}>{caller}</Text>
        <Text style={styles.phoneNumber}>Chat Docs Call...</Text>
        <View style={[styles.row, {marginTop: 'auto'}]}>
          <View style={styles.iconContainer}>
            <Ionicons name="alarm" color="white" size={30} />
            <Text style={styles.iconText}>Remind me</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="message" color="white" size={30} />
            <Text style={styles.iconText}>Message</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Pressable onPress={onDecline} style={styles.iconContainer}>
            <View style={styles.iconButtonContainer}>
              <Feather name="x" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Decline</Text>
          </Pressable>
          <Pressable onPress={onAccept} style={styles.iconContainer}>
            <View
              style={[
                styles.iconButtonContainer,
                {backgroundColor: '#2e7bff'},
              ]}>
              <Feather name="check" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Accept</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IncommingCall;
