import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerContent from "../../screens/userScreens/DrawerContent";
import MainTabScreen from "../../screens/userScreens/MainTabScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DetailsScreen from "../../screens/userScreens/DetailsScreen";

const Drawer = createDrawerNavigator();

const User = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Pet & Doctor" component={MainTabScreen} />
      <Drawer.Screen name="SupportScreen" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default User;
