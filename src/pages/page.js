import { useEffect, useState } from "react";
import MTable from "../components/MaterialTable";
import { getLetters, updateLetterReadStatus } from "../api/newsLetter";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function Home() {
  const [letters, setLetters] = useState([]); //letters is an array of objects [{title,source,link,status},{title,source,link,status}
  useEffect(() => {
    getLetters().then((result) => {
      setLetters(
        result.map((item) => ({
          id: item._id,
          title: item.title,
          source: item.source,
          link: item.link,
          status: item.status,
        }))
      );
    });
  }, []);

  //create columns with title,source,link,status as heading
  const columns = [
    { name: "title", label: "Title" },
    { name: "source", label: "Source" },
    {
      name: "link",
      label: "Link",
      options: {
        customBodyRender: (rowData) =>
          rowData?.link && (
            <InsertLinkIcon
              onClick={() => window.open(rowData.link, "_blank", "noreferrer")}
            />
          ),
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value, tableMeta) =>
          value && (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Age"
              onChange={(e) => setStatus(tableMeta.rowIndex, e.target.value)}
            >
              <MenuItem value={"UNREAD"}>UNREAD</MenuItem>
              <MenuItem value={"READ"}>READ</MenuItem>
            </Select>
          ),
      },
    },
    // {
    //   name: "Change Status",
    //   options: {
    //     filter: true,
    //     customBodyRender: (rowData) => {
    //       console.log("RowData", rowData);
    //       return (
    //         <FormControlLabel
    //           label={rowData?.status == "READ" ? "Yes" : "No"}
    //           value={rowData?.status == "READ" ? "Yes" : "No"}
    //           control={
    //             <Switch
    //               color="primary"
    //               checked={rowData?.status == "UNREAD"}
    //               value={rowData?.status == "READ" ? "Yes" : "No"}
    //             />
    //           }
    //           onChange={(event) => {
    //             console.log("RowData", rowData.status);
    //           }}
    //         />
    //       );
    //     },
    //   },
    // },
  ];

  const setStatus = (index, value) => {
    const letterCopy = [...letters];
    letterCopy[index].status = value;

    updateLetterReadStatus(letterCopy[index].id, value);
    setLetters(letterCopy);
  };

  return (
    <main style={styles.main}>
      {/* <div>
        <h1>My Newsletters</h1>
      </div> */}
      <div>
        <MTable columns={columns} data={letters} title="My Newsletters" />
      </div>
    </main>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "6rem",
    minHeight: "100vh",
  },
};
