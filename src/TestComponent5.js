import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TestComponent5 extends Component {
  static navigationOptions = {
    title: 'Five',
  };
  render() {
    return (
      <View>
        <Text>Five</Text>
      </View>
    );
  }
}

export default TestComponent5;
