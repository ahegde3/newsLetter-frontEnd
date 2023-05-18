import MUIDataTable from "mui-datatables";

const MTable = (props) => {
  const { columns, data, title } = props;

  return (
    <div style={{ maxWidth: "100%" }}>
      <MUIDataTable
        columns={columns}
        data={data}
        title={title}
        onRowClick={(evt, selectedRow) => console.log(selectedRow)}
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
