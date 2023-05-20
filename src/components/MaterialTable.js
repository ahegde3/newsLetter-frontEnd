import MUIDataTable from "mui-datatables";

const MTable = (props) => {
  const { columns, data } = props;

  return (
    <div style={{ maxWidth: "100%" }}>
      <MUIDataTable
        columns={columns}
        data={data}
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
