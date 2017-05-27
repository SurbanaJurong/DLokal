import React, { Component } from 'react';
import { View, Image } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBK_mg4OrLjej8IPUj_F2TiE_pNg4tm4n8',
    authDomain: 'react-auth-f3fc9.firebaseapp.com',
    databaseURL: 'https://react-auth-f3fc9.firebaseio.com',
    projectId: 'react-auth-f3fc9',
    storageBucket: 'react-auth-f3fc9.appspot.com',
    messagingSenderId: '720739795785'
    });

    firebase.auth().onAuthStateChanged((user) => {
      // Event handler for signing in and out
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    const { navigate } = this.props.navigation;

    const imageStyle = {
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'relative'
    };

    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Image source={{ uri: 'http://www.straitstimes.com/sites/default/files/articles/2013/08/29/SingHomesSeven2908e_2x.jpg' }} style={imageStyle} resizeMode='cover' />
            <View style={{ opacity: 0.75, position: 'absolute', alignItems: 'flex-end', alignSelf: 'stretch', flexDirection: 'row' }}>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
              <Button onPress={() => navigate('Job1')} title="Continue">
                Click To Continue
              </Button>
            </View>
          </View>
        );

      case false:
        return <LoginForm />;

      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
