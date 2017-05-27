import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardSection2 } from './'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18,
  },
  descriptionText: {
    marginLeft: 12,
    marginTop: 0,
    fontSize: 15,
  },
  descriptionBox: {
    flex: 2.5,
    justifyContent: 'center'
  },
  nameText: {
    flex: 1,
    fontSize: 13,
    marginLeft: 12,
  },
  photo: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 0,
    marginRight: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  ratingContainer: {
    fontSize: 13,
    marginLeft: 12,
    marginRight: 5,
  },
  nameContainer: {
    flex: 1,
    marginTop: 0,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  starStyle: {
    height: 10,
    width: 10
  },
  priceText: {
    flex: 0.7,
    fontSize: 12,
    marginLeft: 12,
    marginTop: 0,
  }
});


export const ServiceItem = (props) => {
  console.log(props.image);
  console.log(props.item);
  const { user, service, description, rating, image, price } = props.item;
  return (
  <CardSection2>
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.titleText}>{`${service}`}</Text>
      <View style={styles.nameContainer}>
        <Text style={styles.ratingContainer}>{`${rating}`}</Text>
        <Image source={require('./star.png')} style={styles.starStyle} />
        <Text style={styles.nameText}>{`${user}`}</Text>
      </View>
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>{`${description}`}</Text>
      </View>
      <Text style={styles.priceText}>{`${price}`}</Text>
    </View>
    <Image source={{ uri: image }} style={styles.photo} resizeMode='cover' />
  </View>
  </CardSection2>
);
};
