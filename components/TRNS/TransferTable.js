import { ScrollView } from "react-native";
import TransferData from "./TransferData";
const TransferTable = (props) => {
  console.log(props);
  return (
    <ScrollView>
      {props.data.map((d, index) => {
        return (
          <TransferData
            key={index}
            name={d.name}
            skuid={d.id}
            reqQty={d.reqQTY}
          />
        );
      })}
    </ScrollView>
  );
};
export default TransferTable;
