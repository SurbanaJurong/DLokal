import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import { ButtonRectangle } from './components/common';

class Payments extends Component {
  static navigationOptions = {
    title: 'Credit Card Payment',
  };
  constructor(props) {
    super(props);
    this.state = { formCompleted: false };
  }

  onButtonPress() {
    // Navigate Back to screen
    // Pop up with payment successful
  }

  onChange(form) {
    this.setState({ formCompleted: form.valid });
    console.log(form.valid);
  }

  render() {
    const { container, cardInput, div1, div2 } = styles;
    const { navigate } = this.props.navigation;
    return (

      // Navigate Back to screen
      //dummy number: 5105105105105100 exp date: 02/21 cvv = 111

       <View style={container}>
        <View style={div1} />
        <CreditCardInput styles={cardInput} onChange={this.onChange.bind(this)} />
        <View style={div2} />
        <ButtonRectangle
          enabled={this.state.formCompleted}
          onPress={() => {
            Alert.alert('Payment made successfully', '', [
              { text: 'OK', onPress: () => navigate('Job1') },
            ]);
          }}
        >
          <Text>Make Payment</Text>
        </ButtonRectangle>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  cardInput: {
    marginTop: 200,
    paddingTop: 200,
  },
  div1: {
    height: 40,
  },
  div2: {
    flex: 1,
  }
};


export default Payments;
