import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { darkPurple } from "../constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/UserAction";
import { COLORS, SIZES } from "../constants/index";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
var { width } = Dimensions.get("window");

const Signup = (props) => {
  const { error, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(
    "https://res.cloudinary.com/djnpm1f5w/image/upload/v1677756227/avatars/ufuysrihrzup1i5ueqkz.jpg"
  );

  const registerUser = () => {
    dispatch(register(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearErrors" });
    }

    if (isAuthenticated) {
      alert("User create Done!");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <Background>
      <View style={{ alignItems: "center", width: 420 }}>
        <Text style={styles.view1}>Register</Text>
        <Text style={styles.loginText}>Create a new account</Text>
        <View style={styles.view2}>
          <TextInput
            placeholder="Write your name..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={name}
            onChangeText={(text) => setName(text)}
            textContentType="name"
          />
          <TextInput
            placeholder="Write your email..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={email}
            onChangeText={(text) => setEmail(text)}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Write your password..."
            placeholderTextColor="#333"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputBox}
            textContentType="password"
            secureTextEntry={true}
          />

          <View style={styles.haventAccountText}>
            <Text style={{ color: "grey", fontSize: 16 }}>
              By signing in, you agree to our{" "}
            </Text>
            <Text
              style={{ color: darkPurple, fontWeight: "bold", fontSize: 16 }}
            >
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "78%",
              paddingRight: 16,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "grey", fontSize: 16 }}>and </Text>
            <Text
              style={{ color: darkPurple, fontWeight: "bold", fontSize: 16 }}
            >
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkPurple}
            btnLabel="Signup"
            Press={registerUser}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkPurple, fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  view1: {
    color: "white",
    fontSize: 64,
    fontWeight: "bold",
    marginVertical: 20,
  },
  view2: {
    backgroundColor: "white",
    height: 700,
    width: 460,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingTop: 60,
    alignItems: "center",
  },
  welcome: { fontSize: 40, color: darkPurple, fontWeight: "bold" },
  loginText: {
    color: "grey",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    alignItems: "flex-end",
    width: "78%",
    paddingRight: 16,
    marginBottom: 100,
  },
  cardHeading: {
    marginTop: 35,
    marginLeft: 24,
    paddingRight: 2,
    fontSize: SIZES.large,
  },
  input: {
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    fontSize: SIZES.medium,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
  },
  haventAccountText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  inputBox: {
    width: width * 1 - 50,
    marginTop: 0,
    marginBottom: 10,
    padding: 8,
    fontSize: SIZES.font,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
  },
  relative: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
    color: "#FB578E",
  },
});

export default Signup;
