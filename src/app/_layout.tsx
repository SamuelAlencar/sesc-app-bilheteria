import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack 
            screenOptions={{ headerStyle: { backgroundColor: "#d63c42" }, headerTintColor: "#fff" }}
        >
            <Stack.Screen 
                name="index" options={{ headerTitle: "Login/Logout" }}
            />
            <Stack.Screen 
                name="ingressos" options={{ headerTitle: "Validação de Ingressos", headerShown: false, headerBackTitle: "Voltar", headerBackTitleVisible: true }}
            />
        </Stack>
    );
}
