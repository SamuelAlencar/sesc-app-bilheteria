import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button, Card, Text, ActivityIndicator } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { Picker } from "@react-native-picker/picker";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import unidadeService, { Unidade } from "../services/UnidadeService";

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
        const loadUnidades = async () => {
            try {
                setIsLoading(true);
                setError(null);
                // const data = await unidadeService.getUnidades();
                
                
                const data = [
                    { id: 89, nome: "CENTRO DE PESQUISA E FORMAÇÃO", sigla: "CPF" },
                    { id: 59, nome: "CINESESC", sigla: "CINESESC" },
                    { id: 54, nome: "OBRA SESC FRANCA", sigla: "FRANCA" },
                    { id: 49, nome: "SESC 14 BIS", sigla: "14 BIS" },
                    { id: 52, nome: "SESC 24 DE MAIO", sigla: "24 DE MAIO" },
                    { id: 86, nome: "SESC ARARAQUARA", sigla: "ARARAQUARA" },
                    { id: 65, nome: "SESC AVENIDA PAULISTA", sigla: "AV. PAULISTA" },
                    { id: 80, nome: "SESC BAURU", sigla: "BAURU" },
                    { id: 68, nome: "SESC BELENZINHO", sigla: "BELENZINHO" },
                    { id: 71, nome: "SESC BERTIOGA", sigla: "BERTIOGA" },
                    { id: 85, nome: "SESC BIRIGUI", sigla: "BIRIGUI" },
                    { id: 94, nome: "SESC BOM RETIRO", sigla: "BOM RETIRO" },
                    { id: 75, nome: "SESC CAMPINAS", sigla: "CAMPINAS" },
                    { id: 91, nome: "SESC CAMPO LIMPO", sigla: "CAMPO LIMPO" },
                    { id: 64, nome: "SESC CARMO", sigla: "CARMO" },
                    { id: 79, nome: "SESC CATANDUVA", sigla: "CATANDUVA" },
                    { id: 62, nome: "SESC CONSOLAÇÃO", sigla: "CONSOLAÇÃO" },
                    { id: 61, nome: "SESC FLORÊNCIO DE ABREU", sigla: "FLORÊNCIO" },
                    { id: 73, nome: "SESC GUARULHOS", sigla: "GUARULHOS" },
                    { id: 55, nome: "SESC INTERLAGOS", sigla: "INTERLAGOS" },
                    { id: 57, nome: "SESC IPIRANGA", sigla: "IPIRANGA" },
                    { id: 56, nome: "SESC ITAQUERA", sigla: "ITAQUERA" },
                    { id: 93, nome: "SESC JUNDIAI", sigla: "JUNDIAI" },
                    { id: 69, nome: "SESC MARILIA", sigla: "MARILIA" },
                    { id: 95, nome: "SESC OSASCO", sigla: "OSASCO" },
                    { id: 74, nome: "SESC PARQUE DOM PEDRO II", sigla: "DOM PEDRO" },
                    { id: 58, nome: "SESC PINHEIROS", sigla: "PINHEIROS" },
                    { id: 83, nome: "SESC PIRACICABA", sigla: "PIRACICABA" },
                    { id: 51, nome: "SESC PIRITUBA", sigla: "PIRITUBA" },
                    { id: 63, nome: "SESC POMPEIA", sigla: "POMPEIA" },
                    { id: 92, nome: "SESC REGISTRO", sigla: "REGISTRO" },
                    { id: 76, nome: "SESC RIBEIRÃO PRETO", sigla: "RIBEIRÃO PRETO" },
                    { id: 84, nome: "SESC RIO PRETO", sigla: "RIO PRETO" },
                    { id: 53, nome: "SESC SANTANA", sigla: "SANTANA" },
                    { id: 70, nome: "SESC SANTO AMARO", sigla: "SANTO AMARO" },
                    { id: 88, nome: "SESC SANTO ANDRÉ", sigla: "SANTO ANDRÉ" },
                    { id: 78, nome: "SESC SANTOS", sigla: "SANTOS" },
                    { id: 96, nome: "SESC SOROCABA", sigla: "SOROCABA" },
                    { id: 67, nome: "SESC SÃO CAETANO", sigla: "SÃO CAETANO" },
                    { id: 82, nome: "SESC SÃO CARLOS", sigla: "SÃO CARLOS" },
                    { id: 77, nome: "SESC SÃO JOSE DOS CAMPOS", sigla: "S. J. CAMPOS" },
                    { id: 81, nome: "SESC TAUBATÉ", sigla: "TAUBATÉ" },
                    { id: 101, nome: "SESC TESTE - 101", sigla: "U.TESTE 101" },
                    { id: 87, nome: "SESC THERMAS DE P. PRUDENTE", sigla: "PRUDENTE" },
                    { id: 66, nome: "SESC VILA MARIANA", sigla: "VILA MARIANA" }
                ];
                
                setUnidades(data);
            } catch (error) {
                setError('Erro ao carregar unidades. Tente novamente.');
                console.error('Error loading unidades:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadUnidades();
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

const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        padding: 0,
        backgroundColor: "#fff",
    },
    card: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderWidth: 0,
        shadowColor: "transparent",
        elevation: 0,
    },
    centered: {
        alignItems: "center",
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: "#ffffff",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: "#000",
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: "#d63c42",
        borderRadius: 0,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    errorText: {
        color: "red",
        marginBottom: 5,
        fontSize: 12,
        textAlign: "center",
    },
});

export default LoginScreen;
