import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

const styles = StyleSheet.create({
  containerDossier: {
    backgroundColor: '#FFFFFF',
    height: deviceHeight(),
  },
  profile: {
    width: deviceWidth(),
    height: 350,
    resizeMode: 'contain',
    marginTop: 40,
  },
  background: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    width: 325,
    height: 350,
    zIndex: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -60,
    overflow: 'hidden',
  },
  patientInfo: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000000',
  },
  date: {
    fontSize: 16,
    marginTop: 10,
  },
  patientData: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  new: {
    fontSize: 16,
    color: '#000000',
    marginLeft: -30,
    marginRight: 70,
  },
  icons: {
    flexDirection: 'row',
    paddingTop: 30,
    marginBottom: 20,
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#3D67AE',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 15,
    marginRight: 15,
  },
});

export default styles;
