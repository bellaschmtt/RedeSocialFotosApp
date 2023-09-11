import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SocialScreen from "./screens/SocialScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPostScreen from "./screens/AddPostScreen";
import Post from "./components/Post";
import CadastroScreen from "./screens/CadastroScreen";

export default function RootNavigation() {
  const Tab = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Cadastro"
          // component={CadastroScreen}
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator
      // cardStyle={{backgroundColor:'transparent'}}
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#00305A',
        },

        headerTitleStyle: {
          color: "#00305A",
        },

        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="Social"
        component={SocialScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Add Post"
        component={AddPostScreen}
        options={{
          tabBarLabel: "Add Post",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: "Post",
          headerShown: false
        }}
      />
    </Tabs.Navigator>
  );
}
