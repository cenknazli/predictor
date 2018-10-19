import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import NewAccountScreen from './screens/NewAccountScreen';
import MainScreen from './screens/MainScreen';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCV3DTa0p0t-NaYpCXOGHP7DBa6LZLBdU0",
      authDomain: "predictor-ce071.firebaseapp.com",
      databaseURL: "https://predictor-ce071.firebaseio.com",
      projectId: "predictor-ce071",
      storageBucket: "predictor-ce071.appspot.com",
      messagingSenderId: "357500953999"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
              title: 'Create an Account',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#3f2141'
              },
              headerTitleStyle: {
                fontSize: 20
              }
            }
          }
        }),
      },
      main: { screen: MainScreen }
    })

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
