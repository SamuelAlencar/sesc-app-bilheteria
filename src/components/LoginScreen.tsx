import React, { useEffect, useState } from "react";
import { ScrollView, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button, Card, Text, ActivityIndicator } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { Picker } from "@react-native-picker/picker";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import styles from "../styles/login.styles"; // import styles from external file
import unidadeService  from "../services/unidadeService"; // Added import for unidadeService

type RootStackParamList = {
    Login: undefined;
    Main: undefined;
};

const loginSchema = z.object({
    email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    selectedCity: z.string().min(1, "Selecione uma unidade")
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginScreen = () => {
    type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [unidades, setUnidades] = useState<Unidade[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        unidadeService.getUnidades()
            .then((unidades) => {
                setUnidades(unidades);
                setIsLoading(false);
            })
            .catch((error) => {
                setError("Erro ao carregar unidades");
                setIsLoading(false);
            });
    }, []);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            selectedCity: "",
        },
    });

    const onSubmit = (data: LoginFormData) => {
        navigation.navigate("Ingressos");
    };

    const clearForm = () => {
        reset({
            email: "",
            password: "",
            selectedCity: "",
        });
    };

    if (isLoading) {
        return (
            <View style={[styles.containerScroll, styles.centered]}>
                <ActivityIndicator size="large" color="#d63c42" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.containerScroll}>
            <Card style={styles.card} elevation={4}>
                <Card.Content>
                    <View style={styles.centered}>
                        <Image
                            source={require("../../assets/images/sesc-sp-logo-home.jpg")}
                            style={styles.image}
                        />
                    </View>

                    <Controller
                        control={control}
                        name="selectedCity"
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.picker}>
                                {error ? (
                                    <Text style={styles.errorText}>{error}</Text>
                                ) : (
                                    <Picker
                                        selectedValue={value}
                                        onValueChange={(itemValue) => {
                                            onChange(itemValue);
                                            console.log('Selected:', itemValue); // Debug log
                                        }}
                                        mode="dialog"
                                    >
                                        <Picker.Item label="Selecione uma unidade" value="" />
                                        {unidades.map((unidade) => (
                                            <Picker.Item
                                                key={unidade.id}
                                                label={unidade.nome}
                                                value={unidade.sigla} // Changed from codigo to sigla
                                            />
                                        ))}
                                    </Picker>
                                )}
                            </View>
                        )}
                    />
                    {errors.selectedCity && (
                        <Text style={styles.errorText}>{errors.selectedCity.message}</Text>
                    )}

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
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label="Senha"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                                style={[styles.input, { color: '#000' }]}
                                outlineColor="#d63c42"
                                theme={{ colors: { primary: "#d63c42" } }}
                            />
                        )}
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

                    <View style={styles.buttonContainer}>
                        <Button
                            mode="elevated"
                            onPress={handleSubmit(onSubmit)}
                            style={styles.button}
                            labelStyle={{ color: "#ffffff" }}
                        >
                            Login
                        </Button>
                        <Button
                            mode="elevated"
                            onPress={clearForm}
                            style={[styles.button, { marginLeft: 10 }]}
                            labelStyle={{ color: "#ffffff" }}
                        >
                            Limpar
                        </Button>
                    </View>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};

export default LoginScreen;
