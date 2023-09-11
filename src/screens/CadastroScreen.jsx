import { View, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function CadastrarScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrarPessoa() {
    console.log(nome);
    console.log(email);

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // adicionar o usuário a coleção Pessoas usando o uid do usuário como chave estrangeira
        const docRef = addDoc(collection(db, "Pessoas"), {
          nome: nome,
          email: email,
          senha: senha,
          uid: user.uid,
        }).then(() => {
          navigation.navigate("Login");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <View>
      <Text style={{
        fontSize: 20,
        // fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        // marginTop: 20,
      
      }}>
        <h1>Cadastrar </h1>
      </Text>

      <TextInput
        style={{ marginBottom: 10, 
          fontWeight: "bold",
          textAlign: "center",
          // marginTop: 20,
          fontSize: 20,
        
        }}
        label="Nome"
        placeholder="Digite seu nome..."
        multiline={false}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={{ marginBottom: 10, 
          fontWeight: "bold",
          textAlign: "center",
          // marginTop: 20,
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
        //  marginTop: 20,
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
        marginBottom: 10, 
        // fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        backgroundColor: "#66b6ab",
      }}
      mode="contained" onPress={cadastrarPessoa}>
        Cadastrar-se
      </Button>
    </View>
  );
}
