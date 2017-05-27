import React from 'react';
import { TextInput, View, Text } from 'react-native';

const MultilineInput = ({ label, placeholder, value, onChangeText, secureText }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureText}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
        multiline
        numberoflines={4}
      />
    </View>
  );
};


const styles = {
  inputStyle: {
    height: 80,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    justifyContent: 'flex-start'
  },
  labelStyle: {
    paddingLeft: 5,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { MultilineInput };
