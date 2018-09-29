import React from 'react';
import { Button } from 'react-native-elements';

const Button2 = ({title}) => {
  return (
    <Button
      title={title}
      backgroundColor='#ffffff'
      color='#3f2141'
      fontFamily='Verdana'
      fontWeight='bold'
      rounded={true}
      buttonStyle={styles.buttonStyle}
    />
  );
};

const styles = {
  buttonStyle: {
    width: 300,
    marginTop: 20
  },
};

export { Button2 };
