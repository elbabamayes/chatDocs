import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: deviceWidth() * 0.05,
    paddingVertical: deviceHeight() * 0.02,
  },
  radioButtons: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
  },
  radioBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  question: {
    fontFamily: 'Roboto-Bold',
    marginTop: deviceHeight() * 0.03,
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
