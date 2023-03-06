import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppoinmentHome from "../../screens/appoinmentsScreen/appoinmentHome";

import ProfileScreen from "../../screens/userScreens/userprofile";

const Appoinment = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: "#3BB77E",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          marginVertical: 2,
        },
      }}
      initialRouteName="ProfileScreen"
    >
      <Stack.Screen name="AppoinmentHome" component={AppoinmentHome} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Appoinment;
