import { useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Alert,
  BackHandler,
  Button,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import bg from "../assets/images/lbc.png";
import axios from "axios";
import { TextInput } from "react-native-paper";

const Login = () => {
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");
  const [isPasswordShow, setSeePassword] = useState(true);
  // console.log();
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "YES",
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ]);
        return true;
      };
      const back = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
      return function () {
        // BackHandler.removeEventListener("hardwareBackPress", backAction);
        back.remove();
      };
    }, [])
  );

  const onLogin = async () => {
    await axios
      .post("http://119.81.209.6:8082/iApp", {
        // apikey: "lbcscapidev",
        username: uname,
        password: pword,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.BranchDept) {
          navigation.navigate("Maintab", {
            screen: "Scanner",
            params: { name: res.data.BranchDept, role: res.data.UserRole },
          });
          setSeePassword(true);
        } else {
          Alert.alert("Please make sure you have validcredentials");
          setSeePassword(true);
        }
        setUname("");
        setPword("");
      });
  };
  // "http://119.81.209.6:3001/generateToken"
  return (
    <LinearGradient colors={["#fff", "#fff"]} style={styles.container}>
      <View>
        <View>
          <Image style={styles.imgBg} source={bg} />
        </View>
        <View style={styles.inputContinner}>
          <TextInput
            theme={{ colors: { primary: "#E90064" } }}
            placeholder="Username"
            textColor="#E90064"
            value={uname}
            style={styles.input}
            onChangeText={(data) => {
              setUname(data);
            }}
          />
          <TextInput
            theme={{ colors: { primary: "#E90064" } }}
            placeholder="Password"
            value={pword}
            textColor="#E90064"
            style={styles.input}
            secureTextEntry={isPasswordShow}
            onChangeText={(data) => {
              setPword(data);
            }}
            right={
              <TextInput.Icon
                icon={() => {
                  if (isPasswordShow === true) {
                    return (
                      <FontAwesome5
                        name="eye-slash"
                        size={20}
                        color="#E90064"
                      />
                    );
                  } else {
                    return (
                      <FontAwesome5 name="eye" size={20} color="#E90064" />
                    );
                  }
                }}
                onPress={() => {
                  setSeePassword((prevState) => {
                    return (prevState = !prevState);
                  });
                }}
              />
            }
          />
        </View>
        <Button title="login" color="#E90064" onPress={onLogin} />
      </View>
    </LinearGradient>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#E90064",
    backgroundColor: "white",
    borderRadius: 6,
    marginBottom: 10,
  },

  imgBg: {
    marginHorizontal: 40,
  },
  inputContinner: {
    marginTop: 20,
  },
});
