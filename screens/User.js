import { Text, View, Pressable, StyleSheet, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
const User = ({ navigation }) => {
  const logOutUser = () => {
    Alert.alert("Log out?", "Are you sure you want to exit the app?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          axios.post("http://119.81.209.6:8082/logOutIapp").then((result) => {
            if (result.data === "Success") {
              navigation.navigate("Login");
            }
          });
        },
        style: "default",
      },
    ]);
  };
  return (
    <View style={style.container}>
      <View style={style.items}>
        <Pressable
          style={{ paddingVertical: 20 }}
          android_ripple={{ color: "gray" }}
          onPress={logOutUser}
        >
          <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
            <MaterialIcons name="logout" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>Sign Out</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
export default User;
const style = StyleSheet.create({
  //   container: {
  //     marginHorizontal: 15,
  //   },
  items: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
