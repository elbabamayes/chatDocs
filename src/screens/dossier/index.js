import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import {profile} from '../../images';
import {SecondaryButton} from '../shared/button';
import {useNavigation} from '@react-navigation/native';

const DossierScreen = () => {
  const {navigate} = useNavigation();
  const {params} = useRoute();
  const {item} = params;
  return (
    <ScrollView style={styles.containerDossier}>
      <Image source={item?.img} style={styles.profile} />
      <View style={styles.background}>
        <View style={styles.patientInfo}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.date}>{item?.requestedDate}</Text>
        </View>

        <View style={styles.patientData}>
          <Text style={styles.new}>New Patient</Text>
          <Text>10:00 AM</Text>
        </View>
        <View style={styles.icons}>
          <Feather name="phone-call" size={30} style={styles.icon} />
          <Feather name="video" size={30} style={styles.icon} />
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={30}
            style={styles.icon}
          />
        </View>
        <SecondaryButton
          text="Symptom Form"
          onPress={() => navigate('symptomForm')}
        />
        <SecondaryButton
          text="Patient dossier"
          onPress={() => navigate('documents')}
        />
      </View>
    </ScrollView>
  );
};
export default DossierScreen;
