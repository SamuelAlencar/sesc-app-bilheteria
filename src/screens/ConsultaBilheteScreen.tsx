import React, { useState, useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  Text,
  Paragraph,
} from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

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
    numero: "022032077363",
    dataEvento: "2023-10-10",
    horaEvento: "18:00",
    unidade: "Teatro Municipal",
    nomeUsuario: "João Silva",
    documentoUsuario: "123.456.789-00",
  },
  {
    numero: "3517373",
    dataEvento: "2023-11-15",
    horaEvento: "20:00",
    unidade: "Auditório Central",
    nomeUsuario: "Maria Oliveira",
    documentoUsuario: "987.654.321-00",
  },
];

const ConsultaBilheteScreen = () => {
  const [numeroBilhete, setNumeroBilhete] = useState("");
  const [resultado, setResultado] = useState<Bilhete | null>(null);
  const [autoFocus, setAutoFocus] = useState(true);

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Login">>();

  const buscarBilhete = () => {
    const bilheteEncontrado = bilhetes.find(
      (bilhete) => bilhete.numero === numeroBilhete
    );
    setResultado(bilheteEncontrado || null);

    if (!bilheteEncontrado) {
      alert("Bilhete não encontrado");
    }
  };

  const handleNumeroBilhete = (text: string) => {
    const numeroLimpo = text.replace(/[^0-9]/g, "");
    setNumeroBilhete(numeroLimpo);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const cleanBilhete = () => {
    setNumeroBilhete("");
    autoFocusBilhete();
    setResultado(null);
  };

  const autoFocusBilhete = () => {
    setAutoFocus(true);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.containerScroll}>
          <Card style={styles.card}>
            <Card.Content>
              <Title style={[styles.title]}>Validação de Ingressos</Title>
              <TextInput
                mode="flat"
                label="Número do Bilhete"
                value={numeroBilhete}
                onChangeText={handleNumeroBilhete}
                keyboardType="numeric"
                style={[styles.input, { borderWidth: 0 }]}
                autoFocus={autoFocus}
                theme={{ colors: { primary: "#d63c42" } }}
                underlineColor="#d63c42"
                
              />
              {resultado && (
                <Card style={styles.card}>
                  <Card.Content>
                    <Title>Bilhete encontrado:</Title>
                    <Text>Número: {resultado.numero}</Text>
                    <Text>Data do Evento: {resultado.dataEvento}</Text>
                    <Text>Hora do Evento: {resultado.horaEvento}</Text>
                    <Text>Unidade: {resultado.unidade}</Text>
                    <Text>Nome do Usuário: {resultado.nomeUsuario}</Text>
                    <Text>
                      Documento do Usuário: {resultado.documentoUsuario}
                    </Text>
                  </Card.Content>
                </Card>
              )}

            </Card.Content>
          </Card>
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", justifyContent:"space-around" , backgroundColor: "d63c42" }}>
        <Button
          mode="contained"
          onPress={buscarBilhete}
          style={styles.button}
          labelStyle={{ color: "#ffffff" }}
          icon="magnify"
        >
          Buscar
        </Button>

        <Button
          mode="contained"
          onPress={cleanBilhete}
          style={styles.button}
          labelStyle={{ color: "#ffffff" }}
          icon="eraser"
        >
          Limpar
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 0,
    shadowColor: "transparent",
    elevation: 0,
  },

  input: {
    backgroundColor: "#ffffff",
    padding: 5,
  },

  button: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#d63c42",
    color: "#ffffff",
    borderRadius: 0,
    marginHorizontal: 10,
  },
  picker: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d63c42",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  image: {
    width: "60",
    height: "120",
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 0,
  },
  errorText: {
    color: "red",
    marginBottom: 5,
    fontSize: 10,
  },
});

export default ConsultaBilheteScreen;
