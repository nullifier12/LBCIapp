import { useState, useEffect } from "react";
import { Animated, Text } from "react-native";
import { DataTable } from "react-native-paper";
const ExpandableView = ({ expand = false }) => {
  const [height] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(height, {
      toValue: expand ? 90 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [expand, height]);
  {
    /* <Pressable
                    android_ripple={{ color: "gray" }}
                    onPress={() => {
                      setCollapse((prevState) => {
                        return (prevState = !prevState);
                      });
                    }}
                  > */
    {
      /* </Pressable> */
    }
  }
  return (
    <Animated.View style={{ height }}>
      <DataTable.Cell>
        <Text style={{ fontWeight: "bold" }}>ReqQty: </Text>300
      </DataTable.Cell>
      <DataTable.Cell>
        <Text style={{ fontWeight: "bold" }}>ReqQty: </Text>300
      </DataTable.Cell>
    </Animated.View>
  );
};
export default ExpandableView;
