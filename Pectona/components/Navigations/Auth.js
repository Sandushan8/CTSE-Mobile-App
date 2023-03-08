import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp_screen from "../../screens/Signup";
import Login_screen from "../../screens/Login";
import StartUpPage from "../../screens/Home";

const Auth = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Login" component={Login_screen} />
      <Stack.Screen name="Signup" component={SignUp_screen} />
      <Stack.Screen name="Home" component={StartUpPage} />
    </Stack.Navigator>
  );
};

export default Auth;
