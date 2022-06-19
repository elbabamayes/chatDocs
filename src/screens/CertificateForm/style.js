import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth() * 0.05,
  },
  text: {
    fontWeight: '500',
    marginTop: 10,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
