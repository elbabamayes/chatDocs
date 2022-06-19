import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {profile} from '../../images';
import styles from './style';
import {LogoutButton} from '../shared/button';
import IconRight from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';

// Profile screen

const ProfileScreen = () => {
  const {navigate} = useNavigation();
  const logoutHandler = () => {
    auth()
      .signOut()
      .then(() => navigate('AuthStack'));
  };
  return (
    <>
      <ScrollView style={styles.containerProfile}>
        <View style={styles.container}>
          <Image source={profile} style={styles.profile} />
          <View style={styles.textView}>
            <Text style={styles.name}>Hi, Jan Boon</Text>
            <Text style={styles.email}>janboon@gmail.com</Text>
          </View>
        </View>

        <View style={styles.profileBtns}>
          <View style={styles.buttonAction}>
            <TouchableOpacity style={styles.profileBtn}>
              <Text style={styles.profileBtnsText}>Edit Profile</Text>
              <IconRight
                name="chevron-right"
                size={22}
                color={'#000000'}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.profileBtn}>
            <Text style={styles.profileBtnsText}>Address</Text>
            <IconRight
              name="chevron-right"
              size={22}
              color={'#000000'}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileBtn}>
            <Text style={styles.profileBtnsText}>Language</Text>
            <Text style={styles.languageText}>EN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileBtn}>
            <Text style={styles.profileBtnsText}>Change password</Text>
            <IconRight
              name="chevron-right"
              size={22}
              color={'#000000'}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileBtn}>
            <Text style={styles.profileBtnsText}>Terms & Conditions</Text>
            <IconRight
              name="chevron-right"
              size={22}
              color={'#000000'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <LogoutButton text="Logout" onPress={() => logoutHandler()} />
        </View>
      </ScrollView>
    </>
  );
};
export default ProfileScreen;
