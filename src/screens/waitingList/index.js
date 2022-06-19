import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {patient1} from '../../images';
import {patient2} from '../../images';
import {profile} from '../../images';
import {AcceptButton} from '../shared/button';
const data = [
  {
    img: patient1,
    name: 'Sofie ben',
    requestedDate: '20/01/2022 - 10:00 AM',
  },
  {
    img: profile,
    name: 'Jan Boon',
    requestedDate: '20/01/2022 - 10:00 AM',
  },
  {
    img: patient1,
    name: 'Stief hoven',
    requestedDate: '20/01/2022 - 10:00 AM',
  },
  {
    img: patient2,
    name: 'Sofie ben',
    requestedDate: '20/01/2022 - 10:00 AM',
  },
  {
    img: profile,
    name: 'Jan Boon',
    requestedDate: '20/01/2022 - 10:00 AM',
  },
  {
    img: patient1,
    name: 'Stief hoven',
    requestedDate: '20/01/2022 - 10:00 AM',
  },
];
const WaitingListScreen = () => {
  const {navigate} = useNavigation();
  return (
    <>
      <ScrollView style={styles.containerWaiting}>
        <View style={{height: 10}} />
        {data.map((item, index) => (
          <View style={styles.patientRect} key={index}>
            <View style={styles.patientView}>
              <Image source={item.img} style={styles.img} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.time}>
              <Text>{item.requestedDate}</Text>
            </View>
            <AcceptButton
              text="Accept"
              onPress={() => navigate('waitingPage')}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};
export default WaitingListScreen;
