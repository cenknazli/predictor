import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class NewAccountScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>New Account Screen</Text>
        <Text>New Account Screen</Text>
        <Text>New Account Screen</Text>
        <Text>New Account Screen</Text>
        <Text>New Account Screen</Text>
        <Text>New Account Screen</Text>
        <Text>New Account Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75e785',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewAccountScreen;
