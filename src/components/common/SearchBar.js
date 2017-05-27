import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    margin: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
    borderRadius: 0
  },
  input: {
    height: null,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
});

export const SearchBar = () => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder="Search for a service..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);
