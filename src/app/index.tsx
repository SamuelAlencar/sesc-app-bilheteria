import {StatusBar} from "react-native"
import LoginScreen  from "../screens/LoginScreen"
import Bilhetes from "./Bilhetes"

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#d63c42" />
      {/* <LoginScreen />     */}
      <Bilhetes />
    </>
  )
}