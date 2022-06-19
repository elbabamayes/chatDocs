import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './style';

const CertificateTextScreen = () => {
  const {params} = useRoute();
  const {goBack, navigate} = useNavigation();
  const {item} = params;
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{item?._data?.Title}</Text>
        <Text style={styles.textBold}>
          The undersigned doctor declares that
        </Text>
        <Text style={styles.text}>{item?._data?.Description}</Text>
        <Text style={styles.textBold}> The patient may leave the house.</Text>
        <Text style={styles.doctorName}>{item?._data?.DoctorName}</Text>
        <Text style={styles.text}>{item?._data?.Date}</Text>
      </ScrollView>
    </>
  );
};
export default CertificateTextScreen;
