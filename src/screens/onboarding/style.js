import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

// Onboarding Styl
const styles = StyleSheet.create({
  Dot: {
    width: 10,
    height: 10,
    marginHorizontal: 3,
    borderRadius:50
  },
  logo: {
    width: deviceWidth() * 0.9,
    resizeMode: 'contain',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  button: {
    color: '#3C67AF',
    borderRadius: 12,
    fontSize: 18,
  },
  text: {
    color: '#000000',
    fontSize: 22,
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: -deviceHeight() * 0.2,
  },
});

export default styles;
