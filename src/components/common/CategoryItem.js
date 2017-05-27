import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

// Children refers to props.children
const onPress = (category) => (category);

const CategoryItem = (props) => {
  const { buttonStyle, textStyle, canvas, viewCanvas } = styles;
  const { category, image } = props;
  console.log(image);
  console.log(category);

  return (


        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={viewCanvas}>
            <Image source={{ uri: image }} resizeMode='cover' style={canvas} />
          </View>
          <Text style={textStyle}>{category}</Text>
        </View>

  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textShadowColor: 'black',
    position: 'absolute'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: '#987654',
    width: null,
    height: 120
  },
  canvas: {
    position: 'relative',
    borderRadius: 5,
    borderWidth: 1,
    margin: 0,
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 120,
    justifyContent: 'center',
  },
  viewCanvas: {
    position: 'relative',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 120,
    justifyContent: 'center',
    opacity: 0.5,
    backgroundColor: 'black'
  }
};

export { CategoryItem };
