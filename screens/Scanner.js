import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  BackHandler,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import axios from "axios";
const getCurrentTimeOfDay = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};

const Scanner = ({ route, navigation }) => {
  // console.log(route);
  const time = moment().format("llll");
  const timeOfDay = getCurrentTimeOfDay();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const scannerRef = useRef(null);

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };
  // const scanAgain = () => {
  //   setScanned(false);
  // };
  useFocusEffect(
    useCallback(() => {
      return () => {
        const unsubscribe = navigation.addListener("focus", () => {
          setScanned(false);
          setHasPermission(false);
        });
        return unsubscribe;
      };
    }, [])
  );
  // useFocusEffect(
  //   useCallback(() => {
  //     setScanned(false);
  //     return () => {
  //       return setScanned(true);
  //     };
  //   }, [])
  // );
  useEffect(() => {
    askForCameraPermission();
  }, [askForCameraPermission]);
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
              axios
                .post("http://119.81.209.6:8082/logOutIapp")
                .then((result) => {
                  console.log(result.data);
                  BackHandler.exitApp();
                });
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
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: `Welcome to iApp`,
  //   });
  // }, [navigation]);
  const handleBarCodeScanned = ({ type, data }) => {
    // console.log(type, data);
    setScanned(true);
    navigation.navigate("GoodReceives", {
      dataId: data,
      dataType: type,
    });

    // Alert.alert(data, "scanned", [
    //   {
    //     text: "Okay",
    //     style: "default",
    //     onPress: () => {
    //       navigation.navigate("GoodReceives", {
    //         dataId: data,
    //         dataType: type,
    //       });
    //     },
    //   },
    // ]);
    // setText(data);
    // console.log("Type: " + type + "\nData: " + data);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Proccessing access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <>
      <View
        style={{
          backgroundColor: "#d00149",
          paddingHorizontal: 5,
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 13,
              marginTop: 30,
              marginLeft: 10,
            }}
          >
            Good {timeOfDay}{" "}
            <Text style={{ fontWeight: "800", fontSize: 15 }}>
              Branch {route.params?.name}
            </Text>
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              marginLeft: 10,
              fontWeight: "800",
            }}
          >
            <Text style={{ fontWeight: "400" }}>Role:</Text>{" "}
            {route.params?.role}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              marginTop: 40,
              marginRight: 10,
            }}
          >
            {time}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            shouldScannerStopPropagation={true}
            ref={scannerRef}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 630, width: 630 }}
          />
        </View>
        {/* <Text style={styles.maintext}>{data}</Text> */}
        {/* {scanned && <ProductDetails barCodeData={data} />} */}
        {/* {scanned && (
        <Button title={"Scan new product"} onPress={scanAgain} color="tomato" />
      )} */}
      </View>
    </>
  );
};
export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 330,
    width: 330,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});
