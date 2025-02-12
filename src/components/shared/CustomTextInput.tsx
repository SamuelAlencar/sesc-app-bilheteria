import React from 'react';
import { TextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface CustomTextInputProps extends TextInputProps {
  autoFocus?: boolean;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
  return (
    <TextInput
      mode="flat"
      theme={{ colors: { primary: '#d63c42', text: '#0000FF' }}}
      underlineColor="#d63c42"
      style={{
        backgroundColor: '#ffffff',
        textDecorationLine: 'none',
        fontSize: 18,
        color: '#0000FF',
        minHeight: 60,
        paddingTop: 15,
      }}
      {...props}
    />
  );
};
