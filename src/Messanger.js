import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat } from 'react-native-gifted-chat';
import { View } from 'react-native';
import { Header2 } from './components/common';


const BOT_SECRET = 'ulG_Mzje-CE.cwA.NDQ.Ue9uhu_dFB2PMZm2ZuN-oyc9QPnfcc5PTK04sGlOWHI';
const BOT_USER = {
  _id: 2,
  name: 'Sir Banner',
  avatar: 'https://facebook.github.io/react/img/logo_og.png',
};
const BOT_ID = 'sirbanner';


class Messanger extends Component {
  static navigationOptions = {
    title: 'Sir Banner',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="robot" size={25} color={tintColor} />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      conversationId: '',
    };
    this.onSend = this.onSend.bind(this);
  }

  componentWillMount() {
    fetch('https://directline.botframework.com/v3/directline/conversations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${BOT_SECRET}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then(this.connectionHandler.bind(this))
      .catch((error) => console.log('Fetch Error ', error));

    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hi there! I’m Sir Banner, your iTown Assistant! How can I help you today?',
          createdAt: new Date(),
          user: BOT_USER,
        },
      ],
    });
  }

  onSend(messages = []) {
    this.messengeSendingHandler(messages);
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  messengeSendingHandler(message) {
    const url = `https://directline.botframework.com/v3/directline/conversations/${this.state.conversationId}/activities`;
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${BOT_SECRET}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'message',
        from: {
          id: '1'
        },
        text: message[0].text
      })
    }).then((response) => response.json())
      .then((response) => console.log('Response', response))
      .catch((error) => console.log('Fetch Error ', error));
  }

  connectionHandler(response) {
    this.setState({ conversationId: response.conversationId });
    const ws = new WebSocket(response.streamUrl);

    ws.onopen = () => {
      // connection opened
    };

    ws.onmessage = (e) => {
      // a message was received
      if (e.data) {
        console.log(e.data);
        const results = JSON.parse(e.data);
        const messageString = results.activities[0].text;
        const senderid = results.activities[0].from.id;
        console.log(senderid);
        if (senderid === BOT_ID) {
          if (messageString !== undefined) {
            const messages = [{
              _id: results.activities[0].id,
              text: messageString,
              createdAt: new Date(),
              user: BOT_USER,
            }];
            this.setState((previousState) => {
              return {
                messages: GiftedChat.append(previousState.messages, messages),
              };
            });
          }
        }
      }
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };

    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header2 headerText='Sir Banner' />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}

export default Messanger;
