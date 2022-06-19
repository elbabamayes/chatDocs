import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

const styles = StyleSheet.create({
  containerWaiting: {
    backgroundColor: '#FFFFFF',
    height: deviceHeight(),
  },
  patientRect:{
    width: 350,
    height: 160,
    backgroundColor:'#F0F0F0',
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop:20,
    marginBottom: 20
  },
  img:{
    width: 80,
    height: 80,
    borderRadius: 60,
    borderWidth: 1,
    resizeMode: 'contain',
    marginLeft:-80,
  },
  patientView:{
    flexDirection:'row'
  },
  name:{
    fontSize: 18,
    color: '#000000',
    marginLeft: 40,
  }, 
  time:{
    marginLeft: 120,
    marginTop:-40
  }, 
 
});

export default styles;
