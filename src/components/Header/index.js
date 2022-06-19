import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const Header = ({title = 'Header title'}) => {
  const {top} = useSafeAreaInsets();
  const {goBack} = useNavigation();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      {title !== 'Waiting List' ? (
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      ) : null}
      <Text style={[styles.title, {top: top > 0 ? top : undefined}]}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
