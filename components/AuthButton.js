import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const AuthButton = ({title, backgroundColor}) => {
  return (
    <View>
      <Button
        title={title}
        backgroundColor={backgroundColor}
        color='white'
        fontFamily='Verdana'
        fontWeight='bold'
        rounded={true}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = {
  buttonStyle: {
    width: SCREEN_WIDTH * 0.8,
    marginTop: 20
  },
};

export { AuthButton };
