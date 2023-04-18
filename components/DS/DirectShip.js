import {
  View,
  StyleSheet,
  Button,
  Text,
  useWindowDimensions,
  Alert,
} from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import TableContent from "./TableContent";
import globalfunctions from "../../functions/globalfunction";
const DirectShip = (props) => {
  // console.log(props);
  const nav = useNavigation();
  const { width, height } = useWindowDimensions();
  const time = props.time.time;
  const formatTime = moment(time).format("L");

  // const [isColapse, setCollapse] = useState(false);
  const onSave = () => {
    nav.goBack();
  };
  const initHeight = height > 780 ? 500 : 450;
  return (
    <View style={styles.container}>
      <DataTable style={styles.table}>
        <Text style={styles.transActionDetailsText}>Transaction Details</Text>
        <View style={styles.outerHead}>
          <View>
            <Text style={styles.headerHead}>Transaction type</Text>
            <Text style={styles.headerHeadInner}>{props.dest}</Text>
          </View>

          <View>
            <Text style={styles.headerHead}>Source</Text>
            <Text style={styles.headerHeadInner}>{props.header.source}</Text>
          </View>

          {props.dest === "MR" && (
            <View>
              <Text style={styles.headerHead}>Date Created</Text>
              <Text style={styles.headerHeadInner}>{formatTime}</Text>
            </View>
          )}
          <View>
            <Text style={styles.headerHead}>Destination</Text>
            <Text style={styles.headerHeadInner}>
              {props.header.destination}
            </Text>
          </View>
          <View>
            <Text style={styles.headerHead}>Last Action</Text>
            <Text style={styles.headerHeadInner}>
              {props.header.lastAction}
            </Text>
          </View>
          <View>
            <Text style={styles.headerHead}>Status</Text>
            <Text style={styles.headerHeadInner}>
              {props.header.status === "1" ? "Receive" : "Pending"}
            </Text>
          </View>
        </View>

        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title
            textStyle={styles.heaad}
            style={{ paddingVertical: 5 }}
          >
            SKU Name
          </DataTable.Title>
          {/* <DataTable.Title textStyle={styles.heaad} numeric>
              SKUID
              </DataTable.Title>
              <DataTable.Title textStyle={styles.heaad} numeric>
              ReqQty
              </DataTable.Title>
              <DataTable.Title textStyle={styles.heaad} numeric>
              RecQTY
            </DataTable.Title> */}

          <DataTable.Title
            textStyle={[styles.heaad]}
            numeric
            style={{ paddingVertical: 5 }}
          >
            QTY
          </DataTable.Title>
        </DataTable.Header>

        <View
          style={{
            height: initHeight,
          }}
        >
          <TableContent data={props.data} />

          {/* <TableContent /> */}
        </View>
      </DataTable>

      {props.header.destination === props.branchDept ? (
        <View style={styles.button}>
          <Button title="Receive" color="#E90064" onPress={onSave} />
        </View>
      ) : (
        globalfunctions.checkBranch(nav)
      )}
    </View>
  );
};
export default DirectShip;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tableHeader: {
    backgroundColor: "#850000",
    // paddingVertical: 0,
    height: 35,
  },
  heaad: {
    fontWeight: "bold",
    fontSize: 13,
    color: "white",
    textAlign: "center",
    paddingVertical: 1,
  },
  outerHead: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "black",
    justifyContent: "space-evenly",
    paddingVertical: 7,
    marginVertical: 10,
    backgroundColor: "#F7F1E5",
  },
  headerHead: {
    fontSize: 9,
    alignSelf: "center",
  },
  headerHeadInner: {
    fontSize: 9,
    fontWeight: "bold",
    alignSelf: "center",
  },
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
