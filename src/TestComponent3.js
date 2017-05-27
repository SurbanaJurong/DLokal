import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ServiceAdd from './ServiceAdd';

class TestComponent3 extends Component {
  static navigationOptions = {
    title: 'Job3',
  };
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <ServiceAdd />
      </ScrollView>
    );
  }
}

export default TestComponent3;
