import { useState } from "react";
import MaterialTable from "material-table";

const MTable = (props) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const { columns, data, title } = props;

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        onRowClick={
          (evt, selectedRow) => console.log(selectedRow)
          // setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          search: false,
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#67aeae" : "#FFF",
          }),
        }}
      />
    </div>
  );
};
export default MTable;
