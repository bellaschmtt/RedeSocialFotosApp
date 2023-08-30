import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {AddPostScreen} from "./screens/AddPostScreen";
import {HomeScreen} from "./screens/HomeScreen";
import {LoginScreen} from "./screens/LoginScreen";
import {CadastroScreen} from "./screens/CadastroScreen";

// import { styles } from "./utils/style";
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{
            title: "Lista de Tarefas",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CadastroScreen"
          component={CadastroScreen}
          options={{
            title: "Editar Tarefa",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Editar Tarefa",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Editar Tarefa",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddPostScreen"
          component={AddPostScreen}
          options={{
            title: "Editar Tarefa",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MTBNavigator = createMaterialBottomTabNavigator();

export function MainTabNavigator() {
  const theme = useTheme();

  theme.colors.secondaryContainer = "#6C757D";

  return (
    <MTBNavigator.Navigator
      barStyle={{ backgroundColor: "#495057" }}
      activeColor="#212529"
      inactiveColor="#FFFFFF"
      theme={theme}
    >
      {/* <MTBNavigator.Screen
        name="ListScreen"
        component={ListAllTasks}
        options={{
          title: "Lista de Tarefas",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="list-status"
              size={24}
              color={"#212529"}
            />
          ),
        }}
      />
      <MTBNavigator.Screen
        name="AddTaskScreen"
        component={AddTaskScreen}
        options={{
          title: "Adicionar Tarefa",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus-circle" size={24} />
          ),
        }}
      /> */}
    </MTBNavigator.Navigator>
  );
}
