import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import { createUser } from '../actions';

class NewAccountScreen extends Component {

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
        <SignupForm />
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
  const { user } = auth;

  return { user };
}

export default connect(mapStateToProps, { createUser })(NewAccountScreen);
