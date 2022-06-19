import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import styles from './style';
import FlatButton from '../shared/button';
const patientCollection = firestore().collection('patientDocs');

const SymptomFormScreen = () => {
  const {goBack, navigate} = useNavigation();
  const [values, setValues] = useState({
    isPatient: null,
    headache: null,
    stomachache: null,
    dizzy: null,
  });
  const [oldText, setOldText] = useState('');
  const [otherSymptoms, setOtherSymptoms] = useState('');
  const [comments, setComments] = useState('');
  const [allFiledsRequired, setAllFiledsRequired] = useState(false);
  const {isPatient, headache, stomachache, dizzy} = values;
  const saveUserData = () => {
    if (
      isPatient !== null &&
      headache !== null &&
      stomachache !== null &&
      dizzy !== null &&
      oldText?.length > 0 &&
      otherSymptoms?.length > 3 &&
      comments?.length > 3
    ) {
      setAllFiledsRequired(false);
      patientCollection
        .add({
          isPatient,
          headache,
          stomachache,
          dizzy,
          patientOld: oldText,
          symptomsComment: otherSymptoms,
          comments,
        })
        .then(res => {
          navigate('symptomText', {
            item: {
              isPatient,
              headache,
              stomachache,
              dizzy,
              patientOld: oldText,
              symptomsComment: otherSymptoms,
              comments,
            },
          });
          console.log('data added');
        })
        .catch(error => console.log({error}));
    } else {
      setAllFiledsRequired(true);
    }
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text>
            Fill out this symptom form so that the doctor can help you faster
          </Text>
          <Text style={styles.question}>Are you the patient?</Text>
          <View style={styles.radioButtons}>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value={values.isPatient}
                status={values.isPatient === true ? 'checked' : 'unchecked'}
                onPress={() =>
                  setValues({
                    ...values,
                    isPatient: true,
                  })
                }
              />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value={!values.isPatient}
                status={values.isPatient === false ? 'checked' : 'unchecked'}
                onPress={() =>
                  setValues({
                    ...values,
                    isPatient: false,
                  })
                }
              />
              <Text>No</Text>
            </View>
          </View>

          <Text style={styles.question}>Do you have a headache?</Text>
          <View style={styles.radioButtons}>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value={values.headache}
                status={values.headache === true ? 'checked' : 'unchecked'}
                onPress={() =>
                  setValues({
                    ...values,
                    headache: true,
                  })
                }
              />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value={!values.headache}
                status={values.headache === false ? 'checked' : 'unchecked'}
                onPress={() =>
                  setValues({
                    ...values,
                    headache: false,
                  })
                }
              />
              <Text>No</Text>
            </View>
          </View>

          <Text style={styles.question}>Do you have a stomachache?</Text>
          <View style={styles.radioButtons}>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value={values.stomachache}
                status={values.stomachache === true ? 'checked' : 'unchecked'}
                onPress={() =>
                  setValues({
                    ...values,
                    stomachache: true,
                  })
                }
              />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value={!values.stomachache}
                status={values.stomachache === false ? 'checked' : 'unchecked'}
                onPress={() =>
                  setValues({
                    ...values,
                    stomachache: false,
                  })
                }
              />
              <Text>No</Text>
            </View>
          </View>

          <Text style={styles.question}>Are you dizzy?</Text>
          <View style={styles.radioButtons}>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value={values.dizzy}
                status={values.dizzy === true ? 'checked' : 'unchecked'}
                onPress={() =>
                  setValues({
                    ...values,
                    dizzy: true,
                  })
                }
              />
              <Text>Yes</Text>
            </View>
            <View style={styles.radioBtnContainer}>
              <RadioButton
                value={!values.dizzy}
                status={values.dizzy === false ? 'checked' : 'unchecked'}
                onPress={() =>
                  setValues({
                    ...values,
                    dizzy: false,
                  })
                }
              />
              <Text>No</Text>
            </View>
          </View>

          <Text style={styles.question}>How old is the patient?</Text>
          <TextInput
            style={styles.input}
            value={oldText}
            onChangeText={setOldText}
          />

          <Text style={styles.question}>What other symptoms do you have?</Text>
          <TextInput
            style={styles.input}
            value={otherSymptoms}
            onChangeText={setOtherSymptoms}
          />

          <Text style={styles.question}>Do you have any comments?</Text>
          <TextInput
            style={styles.input}
            value={comments}
            onChangeText={setComments}
          />
        </View>
        {allFiledsRequired ? (
          <Text style={styles.errorText}>All fields required</Text>
        ) : null}
        <FlatButton text="Check" onPress={() => saveUserData()} />
        <View style={styles.spacer} />
      </ScrollView>
    </>
  );
};
export default SymptomFormScreen;
