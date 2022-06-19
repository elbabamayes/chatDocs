import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

const styles = StyleSheet.create({
  containerHome: {
    backgroundColor: '#FFFFFF',
    // height: deviceHeight(),
  },
  container: {
    flexDirection: 'row',
    width: deviceWidth(),
    padding: deviceWidth() * 0.05,
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  notificationIcon: {
    paddingLeft: 140,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 60,
    backgroundColor: '#3C67AF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: deviceWidth() - 40,
    height: 70,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 12,
    paddingHorizontal: 20,
    padding: 10,
    marginBottom: 20,
  },
  doctorimg: {
    width: 70,
    height: 70,
    borderRadius: 60,
    borderWidth: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: '#000000',
    fontWeight: '500',
    marginBottom: 20,
    marginHorizontal: 25,
  },
  patientRect: {
    width: deviceWidth() - 40,
    height: 80,
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 1,
    resizeMode: 'contain',
    marginLeft: -100,
    marginTop: -5,
  },
  patientView: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 40,
  },
  time: {
    marginLeft: 70,
    marginTop: -20,
  },
  docsRect: {
    width: deviceWidth() - 40,
    height: 160,
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },

  textSmall: {
    fontSize: 22,
    color: '#000000',
  },
  textHuge: {
    fontSize: 26,
    color: '#000000',
    fontWeight: '500',
    marginBottom: 20,
  },
  lastDocuments: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth() - 40,
  },
  itemText: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllContainer: {
    flexDirection: 'row',
  },
});

export default styles;
