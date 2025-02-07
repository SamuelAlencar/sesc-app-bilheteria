import {StatusBar} from "react-native"
import LoginScreen  from "../components/LoginScreen"

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#d63c42" />
      <LoginScreen />    
      <Teste />
    </>
  )
}