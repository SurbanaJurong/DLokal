import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardSection, CardSection2 } from './common';

class MyService extends Component {
  static navigationOptions = {
    title: 'Service',
  }

  render() {
    const styles = {
      descriptionRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      nameRow: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      starStyle: {
        height: 13,
        width: 13
      }
    };

    const { service, description, image, price, rating, user }
     = this.props.navigation.state.params.data;
    return (
      <Card>
        <CardSection>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, padding: 8 }}>{`${service}`} </Text>
          </View>
        </CardSection>
        <CardSection2>
          <View style={{ flex: 1 }}>
          <Image source={{ uri: image }} style={{ height: 250, width: '100%' }} resizeMode='cover' />
          </View>
        </CardSection2>
        <CardSection>
          <View style={styles.descriptionRow}>
            <View style={{ flex: 5, padding: 5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 17 }}>{`${description}`}</Text>
            </View>
            <View style={{ flex: 0.9, justifyContent: 'center' }}>
              <Text>{`${price}`}</Text>
            </View>
          </View>
        </CardSection>
        <CardSection>
          <View style={{ padding: 5 }}>
            <Text style={{ marginBottom: 13, fontSize: 14 }}>Service provided by:</Text>
            <View style={styles.nameRow}>
              <Text style={{ marginRight: 7, fontSize: 16 }}>{`${user}`}</Text>
              <Text style={{ marginRight: 3, fontSize: 16 }}>{`${rating}`}</Text>
              <Image source={require('./common/star.png')} style={styles.starStyle} />
            </View>
          </View>
        </CardSection>
      </Card>
    );
  }
}

export default MyService;
