import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import FlatButton from '../shared/button';
import {useNavigation} from '@react-navigation/native';

// Location screen

const Location = () => {
  const {navigate} = useNavigation();
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
  });
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Example App',
            message: 'Example App access to your location ',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {
                coords: {latitude, longitude},
              } = position;
              setCoords({latitude, longitude});
            },
            error => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('location permission denied');
          alert('Location permission denied');
        }
      } else {
        request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
          Geolocation.getCurrentPosition(
            position => {
              const {
                coords: {latitude, longitude},
              } = position;
              setCoords({latitude, longitude});
            },
            error => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        });
      }
    })();
  }, []);
  console.log({coords});
  return (
    <>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Location</Text>
      <Text>latitude: {coords.latitude}</Text>
      <Text>longitude: {coords.longitude}</Text>
      <FlatButton text="Continu" onPress={() => navigate('symptomForm')} />
    </View>
    </>
  );
};

export default Location;
