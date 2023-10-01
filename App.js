import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import sigup from './sigup';
import Login from './login';
import forgot from "./forgot";
import Ax from "./axios";


const Stack = createStackNavigator();

function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sigup" component={sigup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="forgot" component={forgot} />
        <Stack.Screen name="data" component={Ax} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;