import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth() * 0.05,
  },
  title: {
    fontWeight: '500',
    marginTop: 10,
    fontSize: 20,
    color: '#000000',
    marginBottom: 30,
  },
  text: {
    fontSize: 15,
    color: '#000000',
    marginBottom: 20,
  },
  textBold:{
    fontSize: 15,
    fontWeight:'bold',
    color: '#000000',
    marginBottom: 10,
  },
  doctorName: {
    fontWeight: '500',
    fontSize: 20,
    color: '#000000',
    marginBottom: 10,
    marginTop:40
  },
});

export default styles;
