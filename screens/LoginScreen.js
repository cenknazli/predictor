import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SigninForm from '../components/SigninForm';
import { loginUser } from '../actions';

class LoginScreen extends Component {

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.user) {
      this.props.navigation.navigate('main');
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <SigninForm />
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
  }
});

const mapStateToProps = ({ auth }) => {
  const { user, email, error } = auth;

  return { user, email, error };
}

export default connect(mapStateToProps, { loginUser })(LoginScreen);
