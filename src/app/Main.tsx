import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Index from ".";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1E88E5",
    secondary: "#FFC107",
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Index />
    </PaperProvider>
  );
}
