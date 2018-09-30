import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import NewAccountScreen from './screens/NewAccountScreen';
import MainScreen from './screens/MainScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: {
        screen: createStackNavigator({
          auth: {
            screen: AuthScreen,
            navigationOptions: {
              header: null
            }
          },
          login: {
            screen: LoginScreen,
            navigationOptions: {
              title: 'Login',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#3f2141'
              }
            }
          },
          newAccount: {
            screen: NewAccountScreen,
            navigationOptions: {
              title: 'Create Account',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#3f2141'
              }
            }
          }
        }),
      },
      main: { screen: MainScreen }
    })

    return (
      <MainNavigator />
    );
  }
}
