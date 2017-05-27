import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View } from 'react-native';
import GridView from './components/GridView';
import { Button, Header2 } from './components/common';
import ServiceList from './components/ServiceList';

import AdvertisedServiceData from './database/renderservice.json';

class ServiceRequest extends Component {
  static navigationOptions = {
    title: 'My Services',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="people" size={30} color={tintColor} />
    ),
  };
  renderContent() {
    return (
      <GridView />
    );
  }

render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={{ flex: 1 }}>
      <Header2 headerText='My Services' />
      <ServiceList
      renderRole='MyService' libraries={AdvertisedServiceData} navigate={navigate}
      />
            <View style={styles.buttonView}>
              <Button onPress={() => navigate('ServiceAdd')}>Provide a new service</Button>
            </View>
        </View>
    );
  }
}
const styles = {
  buttonView: {
    width: 300,
    height: 40,
    marginBottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};

export default ServiceRequest;
// <ServiceList libraries={ServiceData} />
// <Header headerText="Authentication" />
// {this.renderContent()}
