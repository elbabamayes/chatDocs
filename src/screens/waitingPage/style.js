import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

// Waiting style

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    width: deviceWidth() * 0.6,
    position: 'absolute',
    top: deviceHeight() * 0.1,
  },
});

export default styles;
