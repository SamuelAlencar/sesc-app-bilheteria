import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Card, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Bilhete, RootStackParamList } from '../types/bilhete';
import { styles } from '../styles/consultaBilhete.styles';
import { CustomTextInput } from './shared/CustomTextInput';
import { ErrorModal } from './modals/ErrorModal';
import BilheteService from '../services/BilheteService';
import { BilheteFoundModal } from './modals/BilheteFoundModal';

const ConsultaBilheteScreen = () => {
  const [numeroBilhete, setNumeroBilhete] = useState('');
  const [resultado, setResultado] = useState<Bilhete | null>(null);
  const [errorVisible, setErrorVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const buscarBilhete = useCallback(async () => {
    try {
      setIsLoading(true);
      const bilhete = await BilheteService.buscarBilhete(numeroBilhete);
      setResultado(bilhete);
      if (!bilhete) setErrorVisible(true);
    } catch (error) {
      setErrorVisible(true);
    } finally {
      setIsLoading(false);
    }
  }, [numeroBilhete]);

  const handleNumeroBilhete = useCallback((text: string) => {
    setNumeroBilhete(text.replace(/[^0-9]/g, ''));
  }, []);

  const cleanBilhete = useCallback(() => {
    setNumeroBilhete('');
    setResultado(null);
  }, []);

  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView style={styles.containerScroll}>
          <Card style={styles.card}>
            <Card.Content>
              <CustomTextInput
                label="Número do Bilhete"
                value={numeroBilhete}
                onChangeText={handleNumeroBilhete}
                keyboardType="numeric"
                autoFocus
                multiline
                numberOfLines={2}
              />
            </Card.Content>
          </Card>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={buscarBilhete}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            icon="magnify"
            loading={isLoading}
            disabled={isLoading}
          >
            Buscar
          </Button>
          <Button
            mode="contained"
            onPress={cleanBilhete}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            icon="eraser"
            disabled={isLoading}
          >
            Limpar
          </Button>
        </View>

        <ErrorModal
          visible={errorVisible}
          onDismiss={() => setErrorVisible(false)}
          message="Bilhete não localizado"
        />

        {resultado && (
          <BilheteFoundModal
            visible={!!resultado}
            onDismiss={() => setResultado(null)}
            bilhete={resultado}
          />
        )}
      </View>
    </Provider>
  );
};

export default ConsultaBilheteScreen;
