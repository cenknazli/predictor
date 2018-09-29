import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button2 } from './src/components/common';
//import { Button } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logoStyle} source={require('./assets/logo_test.png')} />
        <Text style={styles.textStyle}>Predictor</Text>
        <Button2 title='Create an Account' />
        <Button2 title='Sign in with Email' />
        <Button2 title='Sign in with Facebook'/>
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
    top: -100,
    width: 100,
    height: 120
  },
  textStyle: {
    top: -50,
    fontSize: 32,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color: '#3f2141'
  },
});
