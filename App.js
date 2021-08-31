import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// ROUTES
import EmailScreen from "./src/StartUp/EmailScreen/index";
import PasswordScreen from "./src/StartUp/PasswordScreen/index";
import Main from "./src/Routes/Main/index";
import Login from "./src/StartUp/Login/index"
import SignUp from "./src/StartUp/SignUp"
// NAVIGATIONS

const Stack = createStackNavigator();

console.disableYellowBox = true;

export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{
            headerTransparent: true,
            headerTitle: null,
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{
            headerTransparent: true,
            headerTitle: null,
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
