import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WalletHome from "../../screens/walletScreen/walletHome";

import ProfileScreen from "../../screens/userScreens/userprofile";

const Wallet = () => {
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
      <Stack.Screen name="WalletHome" component={WalletHome} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Wallet;
