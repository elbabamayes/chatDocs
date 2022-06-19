import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import styles from './style';
import FlatButton from '../shared/button';
const patientCollection = firestore().collection('patientDocs');

const SymptomTextScreen = () => {
  const {params} = useRoute();
  const {goBack, navigate} = useNavigation();
  const [allFiledsRequired, setAllFiledsRequired] = useState(false);
  const {item} = params;

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Your answers</Text>
          <Text style={styles.question}>Are you the patient?</Text>
          <Text style={styles.text}>{item?.isPatient ? 'Yes' : 'No'}</Text>

          <Text style={styles.question}>Do you have a headache?</Text>
          <Text style={styles.text}>{item?.headache ? 'Yes' : 'No'}</Text>

          <Text style={styles.question}>Do you have a stomachache?</Text>
          <Text style={styles.text}>{item?.stomachache ? 'Yes' : 'No'}</Text>

          <Text style={styles.question}>Are you dizzy?</Text>
          <Text style={styles.text}>{item?.dizzy ? 'Yes' : 'No'}</Text>

          <Text style={styles.question}>How old is the patient?</Text>
          <Text style={styles.text}>{item?.patientOld}</Text>

          <Text style={styles.question}>What other symptoms do you have?</Text>
          <Text style={styles.text}>{item?.symptomsComment}</Text>

          <Text style={styles.question}>Do you have any comments?</Text>
          <Text style={styles.text}>{item?.comments}</Text>
        </View>
        {allFiledsRequired ? (
          <Text style={styles.errorText}>All fields required</Text>
        ) : null}
        <FlatButton text="Send" onPress={() => navigate('waitingPage')} />
        <View style={styles.spacer} />
      </ScrollView>
    </>
  );
};
export default SymptomTextScreen;
