import React from 'react';
import {Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './style';

const MedicationTextScreen = () => {
  const {params} = useRoute();
  const {goBack, navigate} = useNavigation();
  const {item} = params;
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{item?._data?.Title}</Text>
        <Text style={styles.textBold}>Proof of electronic prescription</Text>
        <Text style={styles.text}>
          Please don't present this document to your pharmacy to scan the
          barcode and deliver the prescribed medicines. This is just for
          information.
        </Text>
        <Text style={styles.textBold}>Prescriber name: {item?._data?.DoctorName}</Text>
        <Text style={styles.textBold}>Patient name: {item?._data?.PatientName}</Text>
        <Text style={styles.text}>NSS nr : 5468895656</Text>
        <Text style={styles.EndDate}></Text>
        <Text style={styles.textBold}>
          Content of the Electronic prescription
        </Text>
        <Text style={styles.text}>1. {item?._data?.Medication}</Text>
        <Text style={styles.text}> {item?._data?.Time} day</Text>
        <Text style={styles.doctorName}>{item?._data?.DoctorName}</Text>
        <Text style={styles.date}>{item?._data?.Date}</Text>
        <Text style={styles.EndDate}>
          End date of the prescription is: 16/06/2023
        </Text>
      </ScrollView>
    </>
  );
};
export default MedicationTextScreen;
