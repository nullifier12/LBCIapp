import { Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// const nav = useNavigation();
const globalfunctions = {
  checkBranch: (nav) => {
    Alert.alert("Opps", "Seems like this package doesn't belong to you", [
      {
        text: "Okay",
        onPress: () => {
          nav.goBack();
        },
        style: "default",
      },
    ]);
  },
};
export default globalfunctions;
