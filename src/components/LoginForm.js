import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  // used for controlled text component
  state = { email: '',
            password: '',
            error: '',
            loading: false
          };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        //On Signin Failure, Tries to Create User
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailure.bind(this));
      });
  }

  onLoginSuccess() {
    // Handler for firebase login success
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFailure() {
    // Handler for firebase login failure
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: 'Authentication Failed.'
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureText
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
