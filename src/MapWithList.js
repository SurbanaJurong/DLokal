import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { Header2 } from './components/common'
import Map from './components/Map';
import ServiceList from './components/ServiceList';
import Services from './database/services.json';

class MapWithList extends Component {
  static navigationOptions = {
    title: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="map" size={23} color={tintColor} />
    ),
  }
  render() {
    const { container, mapStyle, listContainer } = styles;
    const { navigate } = this.props.navigation;
    return (
      <View style={container} >
        <Header2 headerText='Locale' />
        <Map style={mapStyle} />
        <View style={listContainer}>
          <ServiceList renderRole='IndividualService' navigate={navigate} libraries={Services} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },

  mapStyle: {
    flex: 1,
  },

  listContainer: {
    flex: 1.2,
    backgroundColor: 'white'
  }
};

export default MapWithList;
