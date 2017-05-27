import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TestComponent4 extends Component {
  static navigationOptions = {
    title: 'Three',
  };
  render() {
    return (
      <View>
        <Text>Component Four</Text>
      </View>
    );
  }
}

export default TestComponent4;
