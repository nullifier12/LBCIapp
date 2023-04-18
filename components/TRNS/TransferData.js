import { TextInput, View, StyleSheet, Text } from "react-native";
import { DataTable } from "react-native-paper";
const TransferData = (props) => {
  return (
    <DataTable.Row
      style={[
        {
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingHorizontal: 0,
        },
        styles.cardWrapper,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <DataTable.Cell>
            <Text style={styles.productName}>{props.name}</Text>
          </DataTable.Cell>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 10 }}>
              <Text style={styles.footer}>
                SKUID: <Text style={styles.innerFooter}>{props.skuid}</Text>
              </Text>
            </View>
            {/* <View style={{ marginRight: 10 }}>
              <Text style={styles.footer}>
                RecQty: <Text style={styles.innerFooter}>{props.recQty}</Text>
              </Text>
            </View> */}

            <Text style={styles.footer}>
              ReqQty: <Text style={styles.innerFooter}>{props.reqQty}</Text>
            </Text>
          </View>
        </View>

        <TextInput
          // defaultValue="0"
          style={{ textAlign: "center" }}
          // maxLength={3}
          keyboardType="numeric"
          placeholder="QTY."
        />
        {/* </View> */}
      </View>
    </DataTable.Row>
  );
};
export default TransferData;
const styles = StyleSheet.create({
  transActionDetailsText: {
    fontWeight: "bold",
  },
  productName: {
    fontSize: 10,
    fontWeight: "450",
    fontWeight: "bold",
    // letterSpacing: 1,
  },
  productNameWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // marginRight: 10,
    // borderWidth: 2,
    // borderColor: "gray",

    borderRadius: 8,
    padding: 5,
  },
  footer: {
    marginVertical: 3,
    // marginHorizontal: 2,
    fontSize: 9.5,
    fontWeight: "400",
  },
  innerFooter: {
    fontWeight: "700",
    fontSize: 9,
  },
  cardWrapper: {
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: "black",
    marginVertical: 4,
    elevation: 2,
    backgroundColor: "white",
  },
  button: {
    marginTop: 10,
  },
});
