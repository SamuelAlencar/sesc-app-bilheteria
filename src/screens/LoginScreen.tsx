import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button, Card, Title } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { Picker } from "@react-native-picker/picker";

type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const LoginScreen = () => {
  type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Login"
  >;

  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cities = [
    "Belenzinho",
    "Bertioga",
    "Itaquera",
    "Casa Verde",
    "Guarulhos",
    "14 Bis",
  ];

  const handleLogin = () => {
    if (selectedCity === "" || email === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    } else if ()

    navigation.navigate("Bilhetes");
  };
  return (
    <ScrollView style={styles.containerScroll}>
      <Card style={styles.card} elevation={4}>
        <Card.Content>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/images/sesc-sp-logo-home.jpg")}
              style={styles.image}
            />
          </View>
          <Title style={{ color: "#d63c42", marginBottom: 20 }}>Login</Title>
          <View style={styles.picker}>
            <Picker
              selectedValue={selectedCity}
              onValueChange={(itemValue) => setSelectedCity(itemValue)}
              mode="dialog"
              outlineColor="#d63c42"
              borderBottomColor="#d63c42"
            >
              <Picker.Item label="Unidade" value="" />
              {cities.map((city, index) => (
                <Picker.Item key={index} label={city} value={city} />
              ))}
            </Picker>
          </View>
          <TextInput
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            outlineColor="#d63c42"
            theme={{ colors: { primary: "#d63c42" } }}
          />
          <TextInput
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            outlineColor="#d63c42"
            theme={{ colors: { primary: "#d63c42" } }}
          />
          <Button
            mode="elevated"
            onPress={handleLogin}
            style={styles.button}
            labelStyle={{ color: "#ffffff" }}
          >
            Login
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 0,
    shadowColor: "transparent",
    elevation: 0,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#d63c42",
    color: "#ffffff",
    borderRadius: 0,
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
});

export default LoginScreen;
