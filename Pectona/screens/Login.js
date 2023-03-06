import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Background from "../components/Background";
import Btn from "../components/Btn";
import { darkPurple } from "../constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/UserAction";
import { COLORS, SIZES } from "../constants/index";

const Login = (props) => {
  const dispatch = useDispatch();
  var { width } = Dimensions.get("window");

  const { error, isAuthenticated, user } = useSelector((state) => state.user);
  console.log(isAuthenticated);
  console.log(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (isAuthenticated) {
      alert("Login Successfully!");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <Background>
      <View style={{ alignItems: "center", width: 420 }}>
        <Text style={styles.view1}>Login</Text>
        <View style={styles.view2}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.loginText}>Login to your account</Text>
          <TextInput
            placeholder="Write your email..."
            placeholderTextColor="#333"
            style={styles.input}
            textContentType="emailAddress"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Write your password..."
            placeholderTextColor="#333"
            style={styles.input}
            textContentType="password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.card}>
            <Text
              style={{ color: darkPurple, fontWeight: "bold", fontSize: 16 }}
            >
              Forgot Password ?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkPurple}
            btnLabel="Login"
            Press={loginSubmit}
          />
          <View style={styles.haventAccountText}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{ color: darkPurple, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
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
});

export default Login;
