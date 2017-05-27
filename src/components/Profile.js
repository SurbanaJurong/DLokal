import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Review, Header2 } from './common';

class Profile extends Component {
  static navigationOptions = {
    title: 'View Category',
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="face" size={26} color={tintColor} />
    ),
  };
  render() {
    const { scrollView,
    profileBar,
    imageStyle,
    infoBox,
    starStyle,
    rating,
    ratingContainer,
    description,
    reviewsSection,
    reviewHeader,
    nameAndRating
  } = styles;
  console.log('profiling');
  return (
    <View style={{ flex: 1 }}>
    <Header2 headerText='My Profile' />
    <ScrollView style={scrollView}>
      <View style={profileBar}>
        <Image source={require('./common/derp.jpg')} style={imageStyle} resizeMode='cover' />
        <View style={infoBox}>
          <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
            <Text>Change user</Text>
          </TouchableOpacity>
          <View style={nameAndRating}>
            <Text style={{ fontSize: 20 }}>Chuan De Sheng</Text>
            <View style={ratingContainer}>
              <Text style={rating}>4.65</Text>
              <Image source={require('./common/star.png')} style={starStyle} />
            </View>
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 17, marginTop: 15, marginBottom: 5 }}>About me:</Text>
      <Text style={description}>A software developer at Google who is a master of React</Text>
      <Text style={reviewHeader}>Reviews:</Text>
      <View style={reviewsSection}>
        <Review review={'De Sheng provided great service. He was extremely helpful and responsive to my needs. Furthermore he is very skilled at what he does, and is hardworking.'} reviewer={'Tan Ah Hwee'} date={'25 May 2017'} />
        <Review review={'I was impressed by this young man for his attitude towards his peers and the respect he shows to people around him. He was very punctual in delivering his service.'} reviewer={'Mohamed Afiq'} date={'30 April 2017'} />
        <Review review={'Yesterday De Sheng came over to help me with shifting my new furniture. I gladly tipped him more money for his excellent service. Thanks!'} reviewer={'Manohar Govindasamy'} date={'13 April 2017'} />
        <Review review={'De Sheng provided great service. He was extremely helpful and responsive to my needs. Furthermore he is very skilled at what he does, and is hardworking.'} reviewer={'Tan Ah Hwee'} date={'25 May 2017'} />

      </View>
    </ScrollView>
    </View>
  );
}
}

const styles = {
  scrollView: {
    flex: 1,
    padding: 12
  },
  profileBar: {
    flex: 1,
    margin: 4,
    flexDirection: 'row',
  },
  imageStyle: {
    borderRadius: 60,
    height: 120,
    width: 120,
    marginRight: 13
  },
  infoBox: {
    flex: 1,
  },
  nameAndRating: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  ratingContainer: {
    marginTop: 4,
    marginBottom: 4,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    fontSize: 14,
    marginRight: 3
  },
  starStyle: {
    height: 10,
    width: 10
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    paddingBottom: 12,
    borderBottomWidth: 0.5
  },
  reviewHeader: {
    fontSize: 17,
    marginBottom: 10
  },
  reviewsSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Profile;
