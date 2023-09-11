import { ScrollView, View } from "react-native";
// import Post from "../components/Post";
import { Button } from "react-native-paper";



export default function Social({ navigation }) {
  return (
    <ScrollView >
      <View style={{alignItems:'center',justifyContent:'center',height:500,}}>
        <Button
        style={{width:300}}
          // mode="contained"
          buttonColor="#66b6ab"
          textColor="#fff"
          onPress={() => {
            navigation.navigate("Post");
          }}
        >Ver seus Posts</Button>
        {/* <Button
        style={{width:300 ,marginTop:20}}

          // mode="elevated"
          buttonColor="#66b6ab"
          textColor="#fff"
          onPress={() => {
            navigation.navigate("CadastroScreen");
          }}
        >Fazer Cadastro</Button>
        <Button
        style={{width:300 ,marginTop:20}}

          // mode="elevated"
          buttonColor="#66b6ab"
          textColor="#fff"
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >Logar</Button> */}
      </View>
    </ScrollView>
  );
}