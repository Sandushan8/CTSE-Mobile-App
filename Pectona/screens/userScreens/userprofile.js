import React from "react";
import { View, ScrollView } from "react-native";
import Profile from './Profile';
export default function Userprofile({navigation}) {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Profile navigation={navigation} />
      </ScrollView>
    </View>
  );
}
