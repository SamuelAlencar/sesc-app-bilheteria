import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import ConsultaBilheteScreen from './ConsultaBilheteScreen';

// Define the RootStackParamList type
type RootStackParamList = {
    Login: undefined;
    Main: undefined;
};


const LoginScreen = () => {
    
    type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
    
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [selectedCity, setSelectedCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Curitiba'];

    const handleLogin = () => {
        if (selectedCity === '' || email === '' || password === '') {
            Alert.alert('Erro', 'Preencha todos os campos!');

            return ;
        }

        navigation.navigate('Main');};

    return (
        <View style={styles.container}>
            <ConsultaBilheteScreen />
            <Card style={styles.card}>
                <Card.Content>
                    <Title>Login</Title>
                    <Picker
                        selectedValue={selectedCity}
                        onValueChange={(itemValue) => setSelectedCity(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Selecione uma cidade" value="" />
                        {cities.map((city, index) => (
                            <Picker.Item key={index} label={city} value={city} />
                        ))}
                    </Picker>
                    <TextInput
                        label="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                    <TextInput
                        label="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />
                    <Button mode="contained" onPress={handleLogin} style={styles.button}>
                        Entrar
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#ffffff'
    },
    button: {
        marginTop: 10,
    },
    picker: {
        marginBottom: 15,
        backgroundColor: '#fff',
    },
});

export default LoginScreen;

