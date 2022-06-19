import React, {useState} from 'react';
import {Text, ScrollView, TextInput, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './style';
import FlatButton from '../shared/button';

// CertificateForm Screen

const doctorCertificate = firestore().collection('doctorCertificate');
const CertificateFormScreen = () => {
  const {goBack, navigate} = useNavigation();
  const {params} = useRoute();
  const [values, setValues] = useState({
    PatientName: params?.item?._data?.PatientName || '',
    Title: params?.item?._data?.Title || '',
    Description: params?.item?._data?.Description || '',
    DoctorName: params?.item?._data?.DoctorName || '',
    Date: params?.item?._data?.Date || '',
  });
  const [allFiledsRequired, setAllFiledsRequired] = useState(false);
  const {PatientName, Title, Description, DoctorName, Date} = values;
  const sendData = () => {
    if (
      PatientName?.length > 0 &&
      Title?.length > 0 &&
      Description?.length > 0 &&
      DoctorName?.length > 0 &&
      Date?.length > 0
    ) {
      setAllFiledsRequired(false);
      if (params?.item) {
        // update
        doctorCertificate
          .doc(params?.item?._ref?.id)
          .update({
            PatientName,
            Title,
            Description,
            DoctorName,
            Date,
          })
          .then(res => {
            console.log('data added');
          })
          .catch(error => console.log({error}));
      } else {
        doctorCertificate
          .add({
            PatientName,
            Title,
            Description,
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
    doctorCertificate
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
          placeholder="Certificate of illness - 16/06"
          value={Title}
          onChangeText={value => setValues({...values, Title: value})}
        />
        <Text style={styles.text}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Certificate  description"
          value={Description}
          onChangeText={value => setValues({...values, Description: value})}
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
          <Text style={styles.errorText}>All fields required</Text>
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
export default CertificateFormScreen;
