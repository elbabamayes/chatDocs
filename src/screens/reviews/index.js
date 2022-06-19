import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const ReviewsScreen = () => {
  const [remmeberChecked, setRemmeberChecked] = useState(false);
  return (
  <>
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.reviewText}>Call end</Text>
      <Text style={styles.reviewText}>15:30:45</Text>
      <View style={styles.reviewStars}>
        <Text style={styles.reviewText}> Your review about Chat Docs</Text>
        <View style={styles.stars}>
          <Star
            name="star-o"
            // Colored star ( name = "star")
            size={22}
            color={'#000000'}
            style={styles.star}
          />
          <Star name="star-o" size={22} color={'#000000'} style={styles.star} />
          <Star name="star-o" size={22} color={'#000000'} style={styles.star} />
          <Star name="star-o" size={22} color={'#000000'} style={styles.star} />
          <Star name="star-o" size={22} color={'#000000'} style={styles.star} />
          {/* <TouchableOpacity>
            onPress={() => setRemmeberChecked(!remmeberChecked)}
            <Star
              name={remmeberChecked ? "star-o" : "star"}
              color={remmeberChecked ? '#3C67AF' : undefined}
              size={22}
            />
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
    </>
  );
};
export default ReviewsScreen;
