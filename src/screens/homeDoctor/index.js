import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import IconRight from 'react-native-vector-icons/Feather';
import styles from './style';
import {doctor} from '../../images';
import {patient1} from '../../images';
import {patient2} from '../../images';
import {profile} from '../../images';
import FlatButton from '../shared/button';

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
    img: patient2,
    name: 'Sofie ben',
    requestedDate: '20/01/2022 - 10:00 AM',
  },
];
const HomeDoctorScreen = () => {
  const {navigate} = useNavigation();
  return (
    <ScrollView style={styles.containerHome}>
      <View style={styles.container}>
        <Image source={doctor} style={styles.doctorimg} />
        <View style={styles.welcome}>
          <Text style={styles.name}>Welcome Doktor !</Text>
          <Ionicons
            name="notifications"
            size={24}
            color={'#000000'}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={[styles.row, {marginBottom: 20}]}>
        <Text style={styles.title}>Waiting Patients</Text>
        <TouchableOpacity
          onPress={() => navigate('waitingList')}
          style={[styles.row, styles.viewAllContainer]}>
          <Text>View all</Text>
          <IconRight
            name="chevron-right"
            size={22}
            color={'#000000'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {data.map((item, index) => (
        <TouchableOpacity
          onPress={() => navigate('dossier', {item})}
          style={styles.patientRect}
          key={index}>
          <View style={styles.patientView}>
            <Image source={item.img} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.time}>
            <Text>{item.requestedDate}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.docsRect}>
        <Text style={styles.textSmall}>See previous</Text>
        <Text style={styles.textHuge}> DOCUMENTATIONS </Text>
        <FlatButton
          text="Start"
          //   onPress={() => navigation.navigate('symptomForm')}
        />
      </View>
    </ScrollView>
  );
};
export default HomeDoctorScreen;
