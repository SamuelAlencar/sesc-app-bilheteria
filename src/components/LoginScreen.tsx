import React from "react";
import { ScrollView, View, StyleSheet, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button, Card, Title, Text } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { Picker } from "@react-native-picker/picker";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';

type RootStackParamList = {
    Login: undefined;
    Main: undefined;
};

const loginSchema = z.object({
    email: z.string()
        .email('Email inválido')
        .min(1, 'Email é obrigatório'),
    password: z.string()
        .min(6, 'Senha deve ter no mínimo 6 caracteres')
        .min(1, 'Senha é obrigatória'),
    selectedCity: z.string().min(1, 'Selecione uma unidade')
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginScreen = () => {
    type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;
    const navigation = useNavigation<LoginScreenNavigationProp>();
    
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            selectedCity: ''
        }
    });

    const cities = [
        "Belenzinho",
        "Bertioga",
        "Itaquera",
        "Casa Verde",
        "Guarulhos",
        "14 Bis",
    ];

    const onSubmit = (data: LoginFormData) => {
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
                    
                    <Controller
                        control={control}
                        name="selectedCity"
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={value}
                                    onValueChange={onChange}
                                    mode="dialog"
                                >
                                    <Picker.Item label="Unidade" value="" />
                                    {cities.map((city, index) => (
                                        <Picker.Item key={index} label={city} value={city} />
                                    ))}
                                </Picker>
                            </View>
                        )}
                    />
                    {errors.selectedCity && <Text style={styles.errorText}>{errors.selectedCity.message}</Text>}

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label="E-mail"
                                value={value}
                                onChangeText={onChange}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                style={styles.input}
                                outlineColor="#d63c42"
                                theme={{ colors: { primary: "#d63c42" } }}
                            />
                        )}
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label="Senha"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                                style={styles.input}
                                outlineColor="#d63c42"
                                theme={{ colors: { primary: "#d63c42" } }}
                            />
                        )}
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

                    <Button
                        mode="elevated"
                        onPress={handleSubmit(onSubmit)}
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
    errorText: {
        color: "red",
        marginBottom: 5,
        fontSize: 10,
    }
  });
  

export default LoginScreen;
