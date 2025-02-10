import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#d63c42" },
        headerTintColor: "#fff",
        headerBackTitle: "Voltar",
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Login/Logout" }} />
      <Stack.Screen
        name="Ingressos"
        options={{
          headerTitle: "Validação de Ingressos",
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}
