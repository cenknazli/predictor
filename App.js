import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { AuthButton } from './components';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logoStyle} source={require('./assets/logo_test.png')} />
        <Text style={styles.textStyle}>Predictor</Text>
        <AuthButton title='Create an Account' backgroundColor='#eb4454' />
        <AuthButton title='Sign in with Email' backgroundColor='#3c143c' />
        <AuthButton title='Sign in with Facebook' backgroundColor='#3b5998' />
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
  logoStyle: {
    top: SCREEN_HEIGHT * -0.1,
    width: 100,
    height: 120
  },
  textStyle: {
    top: SCREEN_HEIGHT * -0.05,
    fontSize: 32,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color: '#3f2141'
  },
});
