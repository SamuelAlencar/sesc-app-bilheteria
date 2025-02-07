import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{ headerTitle: "Home" }}
            />
            <Stack.Screen 
                name="detail" 
                options={{ headerTitle: "Detalhes" }}
            />
        </Stack>
    );
}
