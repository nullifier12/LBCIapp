import { ScrollView } from "react-native";

import TableData from "./TableData";
const TableContent = (props) => {
  //   console.log(props);
  return (
    <ScrollView>
      {props.data.map((d, index) => {
        return (
          <TableData
            key={index}
            name={d.name}
            skuid={d.id}
            recQty={d.recQTY}
            reqQty={d.reqQTY}
          />
        );
      })}
    </ScrollView>
  );
};
export default TableContent;
