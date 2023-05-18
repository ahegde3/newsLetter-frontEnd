import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material";

const MTable = (props) => {
  //const [selectedRow, setSelectedRow] = useState(null);
  const { columns, data, title } = props;
  const defaultMaterialTheme = createTheme();

  return (
    <div style={{ maxWidth: "100%" }}>
      <MUIDataTable
        columns={columns}
        data={data}
        title={title}
        onRowClick={
          (evt, selectedRow) => console.log(selectedRow)
          // setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          selectableRows: false,
          print: false,
          download: false,
        }}
      />
    </div>
  );
};
export default MTable;
