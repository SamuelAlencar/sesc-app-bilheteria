import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Text, Paragraph } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
type RootStackParamList = {
  Login: undefined;
  // Add other routes here if necessary
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
    numero: '12345',
    dataEvento: '2023-10-10',
    horaEvento: '18:00',
    unidade: 'Teatro Municipal',
    nomeUsuario: 'João Silva',
    documentoUsuario: '123.456.789-00'
  },
  {
    numero: '67890',
    dataEvento: '2023-11-15',
    horaEvento: '20:00',
    unidade: 'Auditório Central',
    nomeUsuario: 'Maria Oliveira',
    documentoUsuario: '987.654.321-00'
  }
  // Adicione mais bilhetes conforme necessário
];

const ConsultaBilheteScreen = () => {
  const [nome, setNome] = useState('');
  const [resultado, setResultado] = useState<Bilhete | null>(null);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();

  const buscarBilhete = () => {
    const bilheteEncontrado = bilhetes.find(bilhete => bilhete.nomeUsuario.toLowerCase() === nome.toLowerCase());
    setResultado(bilheteEncontrado || null);
  };

  const voltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title style={styles.title}>Consulta de Bilhete</Title>
          <TextInput
            mode="outlined"
            label="Digite o nome do usuário"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
          <Button mode="contained" onPress={buscarBilhete} style={styles.button}>
            Buscar
          </Button>
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
          {resultado === null && nome !== '' && (
            <Text style={styles.error}>Bilhete não encontrado</Text>
          )}
          <Button mode="contained" onPress={voltar} style={styles.button}>
            Voltar
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
  },
  error: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default ConsultaBilheteScreen;

