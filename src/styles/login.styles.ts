import { StyleSheet } from "react-native";

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

export default styles;
