// import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ScrollView,
  useWindowDimensions,

  // Pressable,
} from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
// import ExpandableView from "./Expandable";
const DirectShip = (props) => {
  console.log(props);
  const nav = useNavigation();
  const { width, height } = useWindowDimensions();

  // const [isColapse, setCollapse] = useState(false);
  const onSave = () => {
    nav.goBack();
  };
  const initHeight = height > 780 ? 500 : 450;
  return (
    <View style={styles.container}>
      <ScrollView>
        <DataTable style={styles.table}>
          <Text style={styles.transActionDetailsText}>Transaction Details</Text>
          <View style={styles.outerHead}>
            <View>
              <Text style={styles.headerHead}>Transaction type</Text>
              <Text style={styles.headerHeadInner}>DirectShip</Text>
            </View>
            <View>
              <Text style={styles.headerHead}>Source</Text>
              <Text style={styles.headerHeadInner}>LGA01</Text>
            </View>
            <View>
              <Text style={styles.headerHead}>Date Created</Text>
              <Text style={styles.headerHeadInner}>2023-03-01</Text>
            </View>
            <View>
              <Text style={styles.headerHead}>Destination</Text>
              <Text style={styles.headerHeadInner}>LGA03</Text>
            </View>
            <View>
              <Text style={styles.headerHead}>Last Action</Text>
              <Text style={styles.headerHeadInner}>LGA01</Text>
            </View>
            <View>
              <Text style={styles.headerHead}>Status</Text>
              <Text style={styles.headerHeadInner}>Receive</Text>
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
            <ScrollView>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>1001001</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>404</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5005</Text>
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
                      <Text style={styles.productName}>
                        Mountain bike with wireless break/10
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>999009</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>990099</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5050</Text>
                      </Text>
                    </View>
                  </View>

                  {/* <ExpandableView expand={isColapse} /> */}

                  {/* <DataTable.Cell style={{ alignSelf: "center" }}>
                    300
                  </DataTable.Cell>
                  <DataTable.Cell style={{ alignSelf: "center" }}>
                    300
                  </DataTable.Cell> */}
                  {/* <View
                    style={{
                      borderWidth: 2,
                      borderColor: "gray",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  > */}
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
                      <Text style={styles.productName}>
                        Bluetooth rice cooker with cooling fans
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>9009009</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty:{" "}
                          <Text style={styles.innerFooter}>5454334</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>3434</Text>
                      </Text>
                    </View>
                  </View>

                  {/* <ExpandableView expand={isColapse} /> */}

                  {/* <DataTable.Cell style={{ alignSelf: "center" }}>
                    300
                  </DataTable.Cell>
                  <DataTable.Cell style={{ alignSelf: "center" }}>
                    300
                  </DataTable.Cell> */}
                  {/* <View
                    style={{
                      borderWidth: 2,
                      borderColor: "gray",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  > */}
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
                      <Text style={styles.productName}>
                        GIGABYTE NVIDIA INTEL CORE WITH USB TYPE C CHARGER
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>66576</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>3323</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>50044</Text>
                      </Text>
                    </View>
                  </View>

                  {/* <ExpandableView expand={isColapse} /> */}

                  {/* <DataTable.Cell style={{ alignSelf: "center" }}>
                    300
                  </DataTable.Cell>
                  <DataTable.Cell style={{ alignSelf: "center" }}>
                    300
                  </DataTable.Cell> */}
                  {/* <View
                    style={{
                      borderWidth: 2,
                      borderColor: "gray",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  > */}
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
                    alignItems: "flex-start",
                    paddingHorizontal: 10,
                  }}
                >
                  <View>
                    <DataTable.Cell>
                      <Text style={styles.productName}>
                        MURIATIC ACID EYEDROP
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>009909</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>3323</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>44344</Text>
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
                      <Text style={styles.productName}>
                        ADDING MACHINE TAPE 2 PLY CARBONLESS /ROL
                      </Text>
                    </DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          SKUID: <Text style={styles.innerFooter}>99900</Text>
                        </Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.footer}>
                          RecQty: <Text style={styles.innerFooter}>55344</Text>
                        </Text>
                      </View>

                      <Text style={styles.footer}>
                        ReqQty: <Text style={styles.innerFooter}>5030</Text>
                      </Text>
                    </View>
                  </View>

                  {/* <ExpandableView expand={isColapse} /> */}

                  {/* <DataTable.Cell style={{ alignSelf: "center" }}>
                    300
                  </DataTable.Cell>
                  <DataTable.Cell style={{ alignSelf: "center" }}>
                    300
                  </DataTable.Cell> */}
                  {/* <View
                    style={{
                      borderWidth: 2,
                      borderColor: "gray",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  > */}
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
            </ScrollView>
          </View>
        </DataTable>
      </ScrollView>
      <View style={styles.button}>
        <Button title="Receive" color="#E90064" onPress={onSave} />
      </View>
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
