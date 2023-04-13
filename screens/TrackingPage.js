import { ImageBackground, StyleSheet, Image, View } from "react-native";
// import bg from "../assets/images/lbc.png";
const TrackingPage = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/lbc.png")}
        resizeMode="cover"
        imageStyle={styles.image}
        // style={{ width: "70%", height: "70 %" }}
      />
    </View>
    // <Image source={bg} />
  );
};
export default TrackingPage;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
