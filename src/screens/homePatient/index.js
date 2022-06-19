import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import IconRight from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {profile} from '../../images';
import FlatButton from '../shared/button';
import {AuthContext} from '../../components/navigation/AuthProvider';
const doctorConsultation = firestore().collection('doctorConsultation');
const doctorCertificate = firestore().collection('doctorCertificate');
const doctorMedication = firestore().collection('doctorMedication');

const HomePatientScreen = () => {
  const {navigate} = useNavigation();
  const {isDoctor} = useContext(AuthContext);
  const [doctorConsultationArray, setDoctorConsultationData] = useState([]);
  const [doctorCertificateArray, setDoctorCertificateData] = useState([]);
  const [doctorMedicationArray, setDoctorMedicationData] = useState([]);
  useEffect(() => {
    doctorConsultation
      .get()
      .then(res => {
        const newArray = res.docs?.map(item => {
          return {
            ...item,
            type: 'doctorConsultation',
          };
        });
        setDoctorConsultationData(newArray);
      })
      .catch(error => console.log({error}));
    doctorCertificate
      .get()
      .then(res => {
        const newArray = res.docs?.map(item => {
          return {
            ...item,
            type: 'doctorCertificate',
          };
        });
        setDoctorCertificateData(newArray);
      })
      .catch(error => console.log({error}));
    doctorMedication
      .get()
      .then(res => {
        const newArray = res.docs?.map(item => {
          return {
            ...item,
            type: 'doctorMedication',
          };
        });
        setDoctorMedicationData(newArray);
      })
      .catch(error => console.log({error}));
  }, []);

  return (
    <ScrollView style={styles.containerHome}>
      <View style={styles.container}>
        <Image source={profile} style={styles.doctorimg} />
        <View style={styles.welcome}>
          <Text style={styles.name}>Hi, Jan !</Text>
          <Ionicons
            name="notifications"
            size={24}
            color={'#000000'}
            style={styles.notificationIcon}
          />
        </View>
      </View>
      <View style={styles.docsRect}>
        <Text style={styles.textSmall}>Let's start</Text>
        <Text style={styles.textHuge}> CONSULTATION </Text>
        <FlatButton text="Start" onPress={() => navigate('location')} />
      </View>

      <View style={styles.lastDocuments}>
        <Text style={styles.title}>Last Documents</Text>
        <TouchableOpacity
          onPress={() => navigate('documents')}
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
      <FlatList
        data={[
          ...doctorConsultationArray,
          ...doctorCertificateArray,
          ...doctorMedicationArray,
        ]}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => {
          return item?._data?.Title?.length ? (
            <TouchableOpacity
              onPress={() => {
                if (isDoctor) {
                  if (item?.type === 'doctorConsultation') {
                    navigate('consultationForm', {item});
                  } else if (item?.type === 'doctorCertificate') {
                    navigate('certificateForm', {item});
                  } else {
                    navigate('medicationForm', {item});
                  }
                } else {
                  if (item?.type === 'doctorConsultation') {
                    navigate('consultationText', {item});
                  } else if (item?.type === 'doctorCertificate') {
                    navigate('certificateText', {item});
                  } else {
                    navigate('medicationText', {item});
                  }
                }
              }}
              style={styles.documents}>
              <View style={styles.iconContainer}>
                <Ionicons
                  name="document-text"
                  size={24}
                  color={'#fff'}
                  style={styles.docIcon}
                />
              </View>
              <Text style={styles.itemText}>
                {item?._data?.Title} - {item?._data?.Date}
              </Text>
              <Feather
                name="download"
                size={24}
                color={'#000000'}
                style={styles.icon}
              />
            </TouchableOpacity>
          ) : null;
        }}
      />
      <View style={{height: 100}} />
    </ScrollView>
  );
};
export default HomePatientScreen;
