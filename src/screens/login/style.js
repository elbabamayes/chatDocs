import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

const styles = StyleSheet.create({
  logo: {
    width: deviceWidth() * 0.5,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    width: deviceWidth() * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: 'center',
    marginTop: -50,
  },
  buttonActive: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 151,
    height: 44,
  },
  buttonActiveText: {
    fontSize: 18,
  },
  buttonSec: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 151,
    height: 44,
  },
  buttonSecText: {
    fontSize: 18,
  },

  //   FORM

  from: {
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
  },


  // SIGN UP
  signUp: {
    marginTop: 20,
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
  },
  signUpText: {
    color: '#3C67AF',
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 5,
    alignSelf: 'center',
  },

  // login helpers
  loginHelpers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: deviceHeight() * 0.025,
  },

  // remember me
  remmeberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remmeberMeText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    marginHorizontal: 10,
  },

  // forget password
  forgetPasswordText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
  // validation error text
  error: {
    fontSize: 12,
    color: 'red',
  },
});

export default styles;
