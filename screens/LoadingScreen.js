import { useLayoutEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import bg from "../assets/images/lbc.png";
const LoadingScreen = ({ route, navigation }) => {
  // const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get("window").height;
  // console.log(windowHeight);
  // console.log(navigation);
  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Image source={bg} style={styles.icon} />
      </View>
    </>
  );
};
export default LoadingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
