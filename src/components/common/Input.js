import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureText }) => {
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
      />
    </View>
  );
};


const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    paddingLeft: 5,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
