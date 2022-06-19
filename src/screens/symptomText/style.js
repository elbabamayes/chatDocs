import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: deviceWidth() * 0.05,
    paddingVertical: deviceHeight() * 0.02,
  },
  title: {
    fontWeight: '500',
    marginTop: 10,
    fontSize:20,
    color:'#000000'
  },
  question: {
    fontFamily: 'Roboto-Bold',
    marginTop: deviceHeight() * 0.03,
    color:'#000000'
  },
  text:{
    fontSize:14,
    color:'#000000',
    paddingTop:5
  },
  spacer: {
    height: 50,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    // marginHorizontal: deviceWidth() * 0.05,
    textAlign: 'center',
    marginBottom: deviceHeight() * 0.02,
  },
});

export default styles;
