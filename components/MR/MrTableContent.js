import { ScrollView } from "react-native";
import MrTableData from "./MrTableData";
const MrTableContent = (props) => {
  //   console.log(props);
  return (
    <ScrollView>
      {props.data.map((d, index) => {
        return (
          <MrTableData
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
export default MrTableContent;
