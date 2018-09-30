import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { AuthButton } from '../components';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logoStyle} source={require('../assets/logo_test.png')} />
        <Text style={styles.textStyle}>Predictor</Text>
        <AuthButton
          title='Create an Account'
          backgroundColor='#eb4454'
          onPress={() => this.props.navigation.navigate('newAccount')}
        />
        <AuthButton
          title='Sign in with Email'
          backgroundColor='#3c143c'
          onPress={() => this.props.navigation.navigate('login')}
        />
        <AuthButton
          title='Sign in with Facebook'
          backgroundColor='#3b5998'
          onPress={() => this.props.navigation.navigate('')}
        />
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
    fontSize: 28,
    fontFamily: 'System', //means San Fransisco in ios and Roboto in android
    fontWeight: 'bold',
    color: '#3f2141'
  },
});

export default AuthScreen;
