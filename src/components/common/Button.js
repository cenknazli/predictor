import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity>
      <Text>Log in</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1
  }
};

export { Button };
