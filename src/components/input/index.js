import React from 'react';
import {TextInput} from 'react-native-paper';

const Input = ({
  value,
  setValue,
  style,
  returnKeyType,
  label,
  keyboardType,
  focusable,
  maxLength,
  mode,
  multiline,
  numberOfLines,
  autoFocus,
  autoCapitalize,
  secureTextEntry,
  error,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      multiline={multiline === undefined ? false : multiline}
      numberOfLines={numberOfLines === undefined ? 0 : numberOfLines}
      maxLength={maxLength}
      theme={{
        colors: {
          primary: '#7B7485',
          underlineColor: 'red',
          error: '#FF8686',
        },
      }}
      error={error}
      mode={mode}
      style={style}
      autoCapitalize={
        autoCapitalize === undefined ? 'sentences' : autoCapitalize
      }
      secureTextEntry={secureTextEntry === undefined ? false : secureTextEntry}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
      autoFocus={autoFocus === undefined ? false : autoFocus}
      onChangeText={(text) => setValue(text)}
    />
  );
};
export default Input;
