import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { BilheteProvider } from './src/contexts/BilheteContext';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <PaperProvider>
      <BilheteProvider>
        <HomeScreen />
      </BilheteProvider>
    </PaperProvider>
  );
}
