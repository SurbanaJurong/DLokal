import React, { Component } from 'react';
import { View } from 'react-native';
import GridView from './components/GridView';
import ServiceList from './components/ServiceList';

import ServiceData from './database/services.json';

class FindServices extends Component {
  static navigationOptions = {
    title: 'Tech Services',
  };
  renderContent() {
    return (
      <GridView />
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(ServiceData);
    return (

      <View style={{ flex: 1 }}>
        <ServiceList renderRole='IndividualService' libraries={ServiceData} navigate={navigate} />
      </View>
    );
  }
}

export default FindServices;
// <ServiceList libraries={ServiceData} />
// <Header headerText="Authentication" />
// {this.renderContent()}
