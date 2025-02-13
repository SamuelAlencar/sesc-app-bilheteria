import React from 'react';
import { TextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import { styles } from "@/src/styles/consultaBilhete.styles";

interface CustomTextInputProps extends TextInputProps {
  autoFocus?: boolean;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
  return (
    <TextInput
      mode="flat"
      style={styles.textInput}
      theme={{ colors: { onSurfaceVariant: '#000000' } }}
      {...props}
    />
  );
};
