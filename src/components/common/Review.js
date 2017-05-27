import React from 'react';
import { View, Text, Image } from 'react-native';

export const Review = (props) => {
  const { review, reviewer, date } = props;
  return (
    <View style={styles.containerStyle}>
      <View style={styles.topBar}>
        <Text style={styles.reviewerStyle}>{reviewer}</Text>
        <Text style={styles.dateStyle}>{date}</Text>
      </View>
      <View>
        <Image source={require('./5_stars.png')} style={styles.stars} resizeMode='contain' />
      </View>
      <Text style={styles.reviewStyle}>{review}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 6,
    backgroundColor: '#dddddd',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'column',
    borderRadius: 6,
    position: 'relative'
  },
  topBar: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  reviewerStyle: {
    fontSize: 16
  },
  dateStyle: {
    fontSize: 13
  },
  stars: {
    height: 12,
    width: 60,
    marginTop: 3,
    marginLeft: -2
  },
  reviewStyle: {
    marginTop: 5,
    fontSize: 14,
    fontStyle: 'italic',

  }
};
