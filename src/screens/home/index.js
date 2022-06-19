import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Voximplant} from 'react-native-voximplant';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './style';

// Videocall Home screen

const users = [
  {
    name: 'user1',
    email: 'user1@aa11.aa',
    pass: 'user1pass',
  },
  {
    name: 'user2',
    email: 'user2@aa11.aa',
    pass: 'user2pass',
  },
];

const HomeScreen = () => {
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const voximplant = Voximplant.getInstance();
  const {top, bottom} = useSafeAreaInsets();

  useEffect(() => {
    voximplant.on(Voximplant.ClientEvents.IncomingCall, incomingCallEvent => {
      navigate('incommingCall', {call: incomingCallEvent.call});
    });
    return () => {
      voximplant.off(Voximplant.ClientEvents.IncomingCall);
    };
  }, []);
  return (
    <View style={{paddingTop: top, paddingBottom: bottom}}>
      {users?.map((user, index) => (
        <TouchableOpacity
          style={[styles.textContainer, {borderBottomColor: colors.primary}]}
          onPress={() => navigate('calling', {user})}>
          <Text style={styles.name} key={index}>
            {user?.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default HomeScreen;
