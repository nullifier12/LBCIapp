import { TextInput, View, StyleSheet, Button, Platform } from "react-native";

const Tracking = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        editable={false}
        selectTextOnFocus={false}
        placeholder={"placeholder"}
      />
      <TextInput
        style={styles.inputs}
        editable={false}
        selectTextOnFocus={false}
        placeholder={"placeholder"}
      />
      <TextInput
        style={styles.inputs}
        editable={false}
        selectTextOnFocus={false}
        placeholder={"placeholder"}
      />
      <TextInput
        style={styles.inputs}
        editable={false}
        selectTextOnFocus={false}
        placeholder={"placeholder"}
      />
      <TextInput
        style={styles.inputs}
        editable={false}
        selectTextOnFocus={false}
        placeholder={"placeholder"}
      />
    </View>
  );
};
export default Tracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 30,

    marginVertical: 50,
  },
  inputs: {
    borderWidth: 2,
    borderColor: "rgb(242,242,242)",
    borderRadius: 8,
    width: "100%",
    marginVertical: 20,

    // opacity: 0,
  },
});
