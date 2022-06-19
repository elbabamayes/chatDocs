import React, {useState} from 'react';
import {Text, ScrollView, TextInput, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import styles from './style';
import FlatButton from '../shared/button';

const doctorMedication = firestore().collection('doctorMedication');

const MedicationFormScreen = () => {
  const {goBack, navigate} = useNavigation();
  const {params} = useRoute();

  const [values, setValues] = useState({
    PatientName: params?.item?._data?.PatientName || '',
    Title: params?.item?._data?.Title || '',
    Medication: params?.item?._data?.Medication || '',
    Time: params?.item?._data?.Time || '',
    DoctorName: params?.item?._data?.DoctorName || '',
    Date: params?.item?._data?.Date || '',
  });
  const [allFiledsRequired, setAllFiledsRequired] = useState(false);

  const {PatientName, Title, Medication, Time, DoctorName, Date} = values;
  const sendData = () => {
    if (
      PatientName?.length > 0 &&
      Title?.length > 0 &&
      Medication?.length > 0 &&
      DoctorName?.length > 0 &&
      Date?.length > 0 &&
      Time?.length > 0
    ) {
      // send data
      setAllFiledsRequired(false);
      if (params?.item) {
        // update
        doctorMedication
          .doc(params?.item?._ref?.id)
          .update({
            PatientName,
            Title,
            Medication,
            Time,
            DoctorName,
            Date,
          })
          .then(res => {
            console.log('data added');
          })
          .catch(error => console.log({error}));
      } else {
        // add
        doctorMedication
          .add({
            PatientName,
            Title,
            Medication,
            Time,
            DoctorName,
            Date,
          })
          .then(res => {
            console.log('data added');
          })
          .catch(error => console.log({error}));
      }
    } else {
      setAllFiledsRequired(true);
    }
  };
  const deleteData = () => {
    doctorMedication
      .doc(params?.item?._ref?.id)
      .delete()
      .then(() => {
        goBack();
      });
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Patient name</Text>
        <TextInput
          style={styles.input}
          placeholder="Jan Boon"
          value={PatientName}
          onChangeText={value => setValues({...values, PatientName: value})}
        />
        <Text style={styles.text}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Medication prescription  - 16/06"
          value={Title}
          onChangeText={value => setValues({...values, Title: value})}
        />
        <Text style={styles.text}>Medication</Text>
        <TextInput
          style={styles.input}
          placeholder="Medication"
          value={Medication}
          onChangeText={value => setValues({...values, Medication: value})}
        />
        <Text style={styles.text}>Time</Text>
        <TextInput
          style={styles.input}
          placeholder="3x day"
          value={Time}
          onChangeText={value => setValues({...values, Time: value})}
        />
        <Text style={styles.text}>Doctor name</Text>
        <TextInput
          style={styles.input}
          placeholder="Dr. Ann Koulen"
          value={DoctorName}
          onChangeText={value => setValues({...values, DoctorName: value})}
        />
        <Text style={styles.text}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="16/06/2022"
          value={Date}
          onChangeText={value => setValues({...values, Date: value})}
        />
        {allFiledsRequired ? (
          <Text style={styles.errorText}>All fileds required</Text>
        ) : null}
        <View style={styles.buttonsContainer}>
          <FlatButton
            text={params?.item ? 'Update' : 'Save'}
            onPress={sendData}
          />
          {params?.item ? (
            <FlatButton text={'Delete'} onPress={deleteData} />
          ) : null}
        </View>
      </ScrollView>
    </>
  );
};
export default MedicationFormScreen;
