import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Card, CardSection, Input, MultilineInput, Button } from './components/common/index';

class ServiceAdd extends Component {

  static navigationOptions = {
    title: 'Add Services',
  };

  state = {
    service: '',
    category: '',
    description: ''
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Card>
        <CardSection>
          <Input
          placeholder="Service Name"
          label="Service"
          value={this.state.service}
          onChangeText={service => this.setState({ service })}
          />
        </CardSection>

        <CardSection>
          <Input
          placeholder="Category"
          label="Category"
          value={this.state.category}
          onChangeText={category => this.setState({ category })}
          />
        </CardSection>

        <CardSection >
          <MultilineInput
          placeholder="Description"
          label="Description"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
          />
        </CardSection>

        <CardSection >
          <Button
          onPress={() => {
                        Alert.alert('Form Submitted', '', [
              { text: 'OK', onPress: () => navigate('Job3') },
            ]);
                    }}
          >
            Submit Form
          </Button>

        </CardSection>
      </Card>

      </View>
    );
  }
}

export default ServiceAdd;
