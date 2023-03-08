// side eken ena bar eka
import React from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { Avatar, Title, Caption, Paragraph, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";

import { logOutUser } from "../../redux/actions/UserAction";

import Icon from "@expo/vector-icons/Ionicons";

function DrawerContent(props) {
  const { user, error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Log out Handler
  const logOut = () => {
    dispatch(logOutUser());
    if (error) {
      ToastAndroid.showWithGravity(
        `Log out Failed`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
    ToastAndroid.showWithGravity(
      `Log out Success`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            {/* image */}
            <View
              style={{ flexDirection: "row", marginTop: 15, marginLeft: 80 }}
            >
              <Avatar.Image source={{ uri: user.avatar.url }} size={50} />
            </View>
          </View>
          {/* Pannel bar set eka */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="ios-home" color="#694fad" size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ size }) => (
                <Icon name="ios-person" color="#694fad" size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="ios-bookmark" color="#694fad" size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate("BookmarkScreen");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="ios-apps-sharp" color="#694fad" size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="ios-settings" color="#694fad" size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
            />
          </Drawer.Section>
          {/*  */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon name="ios-log-out-sharp" color="#694fad" size={size} />
          )}
          label="Log Out"
          onPress={logOut}
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
