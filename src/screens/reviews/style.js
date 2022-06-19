import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utiles/index';

// Reviews style
const styles = StyleSheet.create({
  reviewStars: {
    marginTop: 80,
  },
  reviewText: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  star: {
    marginRight: 10,
    marginTop: 10,
  },
});

export default styles;
