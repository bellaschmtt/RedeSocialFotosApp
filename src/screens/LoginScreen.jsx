import { useState } from "react";
import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
// import Post from "../components/Post";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
// import SocialScreen from "./SocialScreen";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    console.log(email);
    console.log(senha);
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        navigation.navigate("TabsNavigation");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          console.log("Usuário não encontrado");
          setError("Usuário não encontrado");
        }
        if (error.code === "auth/wrong-password") {
          console.log("Senha incorreta");
          setError("Senha incorreta");
        }
        if (error.code === "auth/invalid-email") {
          console.log("Email inválido");
          setError("Email inválido");
        }
      });
  }

  return (
    <View>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
      }}>Login</Text>
      
      <View>{error && <Text>{error}</Text>}</View>
      <TextInput
        style={{ marginBottom: 10, 
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          fontSize: 20,
        
        }}
        label="E-mail"
        placeholder="Digite seu e-mail..."
        multiline={false}
        value={email}
        onChangeText={setEmail}
      

      />
      <TextInput
      style={{ marginBottom: 10, 
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        fontSize: 20,
      
      }}
        label="Senha"
        secureTextEntry={true}
        placeholder="Digite sua Senha..."
        multiline={false}
        value={senha}
        onChangeText={setSenha}
      />
      <Button 
      style={{
        // width:300,
        marginBottom: 10, 
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
      }}
      // mode="contained"
      buttonColor="#66b6ab"
      textColor="#fff"
      mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
}
