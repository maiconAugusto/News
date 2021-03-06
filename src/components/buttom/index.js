import React from 'react';
import {Button} from 'react-native-paper';

const ButtomComponent = ({
  data,
  onPress,
  style,
  color,
  mode,
  disabled,
  loading,
}) => {
  return (
    <Button
      contentStyle={{height: 50}}
      style={{...style}}
      loading={loading}
      color={color}
      disabled={disabled}
      mode={mode}
      onPress={onPress}>
      {data}
    </Button>
  );
};
export default ButtomComponent;
