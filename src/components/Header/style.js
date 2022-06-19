import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: deviceWidth(),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: deviceWidth() * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: '#99999930',
    paddingBottom: 10,
    marginTop:20,
    height: deviceHeight() * 0.1,
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    right: 0,
    left: 0,
    fontSize: 17,
    fontWeight: 'bold',
    zIndex: -1,
  },
  backButton: {
    color: '#007AFF',
    fontSize: 20,
  },
});

export default styles;
