import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from '../signup/style';

export default function FlatButton({text, onPress = () => true}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function LogoutButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.logoutButton}>
        <Text style={styles.buttonText}>{text}</Text>
        <Icon name="logout" size={22} color={'#fff'} />
      </View>
    </TouchableOpacity>
  );
}

export function SecondaryButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function AcceptButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.acceptButton}>
        <Text style={styles.acceptText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3C67AF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 151,
    height: 44,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  logoutButton: {
    backgroundColor: '#FF0011',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 151,
    height: 44,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 35,
  },
  secondaryButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 255,
    height: 44,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  secondaryText: {
    color: '#3C67AF',
    fontSize: 18,
    fontWeight: '400',
    alignSelf: 'center',
  },
  acceptButton: {
    backgroundColor: '#7DD25A',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 151,
    height: 44,
    marginTop: 20,
    marginLeft: 120,
    marginBottom: 20,
  },
  acceptText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
