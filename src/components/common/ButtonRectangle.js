import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Children refers to props.children
const ButtonRectangle = ({ enabled, onPress, children }) => {
  const { enabledStyle, disabledStyle, textStyle } = styles;

  if (!enabled) {
    return (
      <View onPress={onPress} style={disabledStyle}>
        <Text style={textStyle}>{children}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={enabledStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
    paddingBottom: 18,
  },
  enabledStyle: {
    justifyContent: 'flex-end',
    height: 60,
    backgroundColor: '#482792',
  },
  disabledStyle: {
    justifyContent: 'flex-end',
    height: 60,
    backgroundColor: '#191919',
  }
};

export { ButtonRectangle };
