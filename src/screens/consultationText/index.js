import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './style';

// ConsultatieText Screen
const ConsultationTextScreen = () => {
  const {params} = useRoute();
  const {goBack, navigate} = useNavigation();
  const {item} = params;

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{item?._data?.Title}</Text>
        <Text style={styles.text}>{item?._data?.Description}</Text>
        <Text style={styles.doctorName}>{item?._data?.DoctorName}</Text>
        <Text style={styles.text}>{item?._data?.Date}</Text>
      </ScrollView>
    </>
  );
};
export default ConsultationTextScreen;
