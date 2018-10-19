import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, FormLabel } from 'react-native-elements';
import { AuthButton } from './';
import { emailChanged, passwordChanged, loginUser } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
};

class SigninForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
  }

  render() {
    return(
      <View style={styles.viewStyle}>
        <FormLabel labelStyle={styles.labelStyle}>Email</FormLabel>
        <FormInput
          placeholder='Enter your email'
          keyboardType="email-address"
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <FormLabel labelStyle={styles.labelStyle}>Password</FormLabel>
        <FormInput
          placeholder='Enter a password'
          secureTextEntry={true}
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <AuthButton
          title='Sign In'
          backgroundColor='#eb4454'
          onPress={this.onButtonPress.bind(this)}
        />
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    top: SCREEN_HEIGHT * -0.15
  },
  containerStyle: {
    marginBottom: 10,
    width: SCREEN_WIDTH * 0.80,
    borderBottomColor: '#3c143c'
  },
  labelStyle: {
    color: '#3c143c',
    fontFamily: 'System',
    fontSize: 20
  },
  inputStyle: {
    color: '#3c143c',
    fontFamily: 'System',
    fontSize: 20
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error } = auth;

    return { email, password, error };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(SigninForm);
