import React from "react";
import { StatusBar } from "react-native";
import ConsultaBilheteScreen from "../components/ConsultaBilheteScreen"

export default function Bilhetes() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#d63c42" />
            <ConsultaBilheteScreen />
        </>
    )
}