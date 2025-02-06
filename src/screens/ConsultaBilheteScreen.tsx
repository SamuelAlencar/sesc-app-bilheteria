import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Text, Paragraph } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
};

type Bilhete = {
  numero: string;
  dataEvento: string;
  horaEvento: string;
  unidade: string;
  nomeUsuario: string;
  documentoUsuario: string;
};

const bilhetes: Bilhete[] = [
  {
    numero: '1',
    dataEvento: '2023-10-10',
    horaEvento: '18:00',
    unidade: 'Teatro Municipal',
    nomeUsuario: 'João Silva',
    documentoUsuario: '123.456.789-00'
  },
  {
    numero: '2',
    dataEvento: '2023-11-15',
    horaEvento: '20:00',
    unidade: 'Auditório Central',
    nomeUsuario: 'Maria Oliveira',
    documentoUsuario: '987.654.321-00'
  }
];

const ConsultaBilheteScreen = () => {
  const [numeroBilhete, setNumeroBilhete] = useState('');
  const [resultado, setResultado] = useState<Bilhete | null>(null);
  const [autoFocus, setAutoFocus] = useState(true);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();

  const buscarBilhete = () => {
    const bilheteEncontrado = bilhetes.find(bilhete => bilhete.numero === numeroBilhete);
    setResultado(bilheteEncontrado || null);
  };

  const handleNumeroBilhete = (text: string) => {
    const numeroLimpo = text.replace(/[^0-9]/g, '');
    setNumeroBilhete(numeroLimpo);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const cleanBilhete = () => {  
    setNumeroBilhete('');
    autoFocusBilhete();
  }
  
  const autoFocusBilhete = () => {
    setAutoFocus(true);
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Validação de Ingressos</Title>
      <Card>
        <Card.Content>
          <TextInput
            mode="outlined"
            label="Digite o número do bilhete"
            value={numeroBilhete}
            onChangeText={setNumeroBilhete}
            keyboardType="numeric"
            style={styles.input}
            autoFocus={true}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <Button mode="contained" onPress={buscarBilhete} style={[styles.button, { flex: 1, marginRight: 5 }]}>
              Buscar
            </Button>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <Button mode="contained" onPress={() => cleanBilhete()} style={[styles.button, { flex: 1, marginHorizontal: 5 }]} >
              Limpar
            </Button>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <Button mode="contained" onPress={() => goBack('')} style={[styles.button, { flex: 1, marginHorizontal: 5 }]}>
              Voltar
            </Button>
          </View>
          {resultado && (
            <Card style={styles.result}>
              <Card.Content>
                <Paragraph>Bilhete encontrado:</Paragraph>
                <Paragraph>Número: {resultado.numero}</Paragraph>
                <Paragraph>Data do Evento: {resultado.dataEvento}</Paragraph>
                <Paragraph>Hora do Evento: {resultado.horaEvento}</Paragraph>
                <Paragraph>Unidade: {resultado.unidade}</Paragraph>
                <Paragraph>Nome do Usuário: {resultado.nomeUsuario}</Paragraph>
                <Paragraph>Documento do Usuário: {resultado.documentoUsuario}</Paragraph>
              </Card.Content>
            </Card>
          )}
          {resultado === null && numeroBilhete !== '' && (
            <Text style={styles.error}>Bilhete não encontrado</Text>
          )}

        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#d63c42',
    elevation: 0,
    shadowColor: 'transparent',
    fontSize: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    elevation: 0,
    shadowColor: 'transparent',
    borderRadius: 0,
  },
  error: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default ConsultaBilheteScreen;
