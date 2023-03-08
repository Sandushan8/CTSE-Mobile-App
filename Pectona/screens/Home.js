import React from "react";
import { View, Text } from "react-native";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { darkPurple, purple } from "../constants/Constants";

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "black", fontSize: 64 }}>PAWS 'N</Text>
        <Text style={{ color: "purple", fontSize: 64, marginBottom: 40 }}>
          FURS
        </Text>
        <Btn
          bgColor={purple}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          textColor={darkPurple}
          btnLabel="Signup"
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

export default Home;
