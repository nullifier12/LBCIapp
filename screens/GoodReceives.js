import { useEffect, useCallback, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import DirectShip from "../components/DS/DirectShip";
import MR from "../components/MR/Mr";
import Transfer from "../components/TRNS/Transfer";
import axios from "axios";
const GoodReceives = ({ route, navigation }) => {
  // console.log(route.params);
  const [trxNdata, setTrxn] = useState([]);
  const [headerInfo, setHeader] = useState({});
  const [dest, setDest] = useState("");
  const [timeCreated, setTime] = useState({});
  // console.log(route.params.dataId);
  const getTrackingDet = useCallback(async () => {
    try {
      await axios
        .post("http://119.81.209.6:8082/fetchTrackingNoDetails", {
          trackingno: route.params?.dataId,
        })
        .then((result) => {
          // console.log(result.data);
          const header = {
            source: result.data.trxndetails[0].SourceID,
            destination: result.data.trxndetails[0].DestinationID,
            lastAction: result.data.trxndetails[0].InitiatedBy,
            status: result.data.trxndetails[0].StatusMsg,
          };
          // console.log(header);
          const newData = result.data.trxndetails.map((d) => {
            return {
              name: d.SKU_Name,
              id: d.SKU_ID,
              reqQTY: d.Qty,
              recQTY: d.QtyReceived,
            };
          });
          const timeOfCreation = {
            time: result.data.trxndetails[0].DateCreated ?? "",
          };
          setTime(timeOfCreation);
          setHeader(header);
          setTrxn(newData);
          setDest(result.data.trxntype);
        });
    } catch (error) {
      Alert.alert(
        "Oppss",
        "The Data that you are Scanning is not on the productlist Please try another one",
        [
          {
            text: "Okay",
            onPress: () => {
              navigation.goBack();
            },
          },
        ]
      );
    }
  }, []);
  useEffect(() => {
    getTrackingDet();
  }, [getTrackingDet]);
  return (
    // <View style={styles.container}>
    //   <ScrollView>
    //     <DataTable style={styles.table}>
    //       <Text style={styles.transActionDetailsText}>Transaction Details</Text>
    //       <View style={styles.outerHead}>
    //         <View>
    //           <Text style={styles.headerHead}>Transaction type</Text>
    //           <Text style={styles.headerHeadInner}>TRANSFER</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.headerHead}>Source</Text>
    //           <Text style={styles.headerHeadInner}>LGA01</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.headerHead}>Date Created</Text>
    //           <Text style={styles.headerHeadInner}>2023-03-01</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.headerHead}>Destination</Text>
    //           <Text style={styles.headerHeadInner}>LGA03</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.headerHead}>Last Action</Text>
    //           <Text style={styles.headerHeadInner}>LGA01</Text>
    //         </View>
    //         <View>
    //           <Text style={styles.headerHead}>Status</Text>
    //           <Text style={styles.headerHeadInner}>Receive</Text>
    //         </View>
    //       </View>
    //       <DataTable.Header style={styles.tableHeader}>
    //         <DataTable.Title textStyle={styles.heaad}> ResNo.</DataTable.Title>

    //         <DataTable.Title textStyle={styles.heaad}>SKU Name</DataTable.Title>

    //         <DataTable.Title textStyle={styles.heaad} numeric>
    //           SKUID
    //         </DataTable.Title>

    //         <DataTable.Title textStyle={styles.heaad} numeric>
    //           QTY
    //         </DataTable.Title>
    //       </DataTable.Header>

    //       <View style={{ height: 450 }}>
    //         <ScrollView>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012121</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012122</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput value="2000" />
    //           </DataTable.Row>
    //           <DataTable.Row
    //             style={{
    //               borderBottomColor: "black",
    //               borderBottomWidth: StyleSheet.hairlineWidth,
    //             }}
    //           >
    //             <DataTable.Cell>0012123</DataTable.Cell>
    //             <DataTable.Cell>V-Pouch/25</DataTable.Cell>
    //             <DataTable.Cell>100102</DataTable.Cell>
    //             <TextInput defaultValue="2001" />
    //           </DataTable.Row>
    //         </ScrollView>
    //       </View>
    //     </DataTable>
    //   </ScrollView>
    //   <View style={styles.button}>
    //     <Button title="Receive" color="#E90064" />
    //   </View>
    // </View>
    <>
      <View
        style={{
          backgroundColor: "#d00149",
          paddingHorizontal: 5,
          paddingVertical: 40,
        }}
      />
      <View style={{ marginTop: 0 }}>
        {dest === "DIRECT_SHIP" ? (
          <DirectShip
            data={trxNdata}
            header={headerInfo}
            dest={dest}
            time={timeCreated}
            branchDept={route.params?.branchDept}
          />
        ) : dest === "MR" ? (
          <MR
            branchDept={route.params?.branchDept}
            data={trxNdata}
            header={headerInfo}
            dest={dest}
            time={timeCreated}
          />
        ) : dest === "TRANSFER" ? (
          <Transfer
            branchDept={route.params?.branchDept}
            data={trxNdata}
            header={headerInfo}
            dest={dest}
            time={timeCreated}
          />
        ) : (
          ""
        )}
      </View>
    </>
  );
};
export default GoodReceives;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tableHeader: {
    backgroundColor: "#850000",
    paddingLeft: 19,
  },
  heaad: {
    fontWeight: "bold",
    fontSize: 13,
    color: "white",
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
});
