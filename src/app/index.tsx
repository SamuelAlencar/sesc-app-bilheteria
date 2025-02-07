import {StatusBar} from "react-native"
import LoginScreen  from "../components/LoginScreen"
import Bilhetes from "../screens/Bilhetes"

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#d63c42" />
      {/* <LoginScreen />     */}
      <Bilhetes />
    </>
  )
}