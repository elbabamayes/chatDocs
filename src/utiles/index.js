import {I18nManager, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getWindow = () => Dimensions.get('window');

export const deviceHeight = () => {
  return getWindow().height;
};

export const deviceWidth = () => {
  return getWindow().width;
};

export const readFormatedTime = async () => {
  return await AsyncStorage.getItem('timeFormat');
};

export const isRtl = I18nManager.isRTL;
