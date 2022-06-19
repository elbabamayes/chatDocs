import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

// Profile Style

const styles = StyleSheet.create({
  containerProfile:{
    backgroundColor: '#FFFFFF',
    padding: deviceWidth() * 0.05,
    height: deviceHeight(),
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 60,
    borderWidth: 1,
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textView: {
    marginLeft: 30,
    marginTop: 15,
  },
  name: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
  },
  profileBtns: {
    marginTop: 30,
    width: deviceWidth() * 0.9,
    alignSelf: 'center',
  },
  profileBtn: {
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    alignContent: 'center',
    borderRadius: 12,
    height: 44,
    marginVertical: 10,
    position: 'relative',
    top: 1,
  },
  profileBtnsText: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 14,
    color: '#000000',
  },
  icon: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    marginVertical: 10,
  },
  languageText: {
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
    marginVertical: 10,
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
});

export default styles;
