import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class LoginScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Text>Login Screen</Text>
        <Text>Login Screen</Text>
        <Text>Login Screen</Text>
        <Text>Login Screen</Text>
        <Text>Login Screen</Text>
        <Text>Login Screen</Text>
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

export default LoginScreen;
