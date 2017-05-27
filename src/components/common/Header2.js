import React from 'react';
import { Text, View } from 'react-native';

const Header2 = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333333'
  }
};

export { Header2 };
