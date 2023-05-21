import { useEffect, useState } from "react";
import MTable from "../components/MaterialTable";
import {
  getLetters,
  updateLetterReadStatus,
  refreshLetters,
} from "../api/newsLetter";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { CircularProgress, Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import { Button } from "@mui/material";

export default function Home() {
  const [letters, setLetters] = useState([]); //letters is an array of objects [{title,source,link,status},{title,source,link,status}
  const [onLoad, setOnLoad] = useState(true);
  useEffect(() => {
    populateData();
  }, []);

  //create columns with title,source,link,status as heading
  const columns = [
    { name: "title", label: "Title" },
    { name: "source", label: "Source" },
    {
      name: "link",
      label: "Link",
      options: {
        customBodyRender: (value) =>
          value && (
            <InsertLinkIcon
              onClick={() => window.open(value, "_blank", "noreferrer")}
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
  ];

  const setStatus = (index, value) => {
    const letterCopy = [...letters];
    letterCopy[index].status = value;

    updateLetterReadStatus(letterCopy[index].id, value);
    setLetters(letterCopy);
  };

  const onRefreshButtonClick = async () => {
    setOnLoad(true);
    refreshLetters();
    //code for sleep for 10 seconds
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    }).then(populateData);
  };

  const populateData = async () => {
    await getLetters().then((result) => {
      setLetters(
        result.map((item) => ({
          id: item._id,
          title: item.title,
          source: item.source,
          link: item.link,
          status: item.status,
        }))
      );
      setOnLoad(false);
    });
  };

  return (
    <main style={styles.main}>
      {onLoad ? (
        <CircularProgress />
      ) : (
        <div>
          <div style={styles.heading}>
            <h1>My Newsletters</h1>
            <Button
              style={styles.refreshContainer}
              variant="outlined"
              onClick={() => onRefreshButtonClick()}
            >
              <h3>Refresh</h3>
              <CachedIcon style={styles.refreshButton} />
            </Button>
          </div>
          <div>
            <MTable columns={columns} data={letters} title="My Newsletters" />
          </div>
        </div>
      )}
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
  heading: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  refreshContainer: {
    display: "flex",
    height: "42px",
    top: "23px",
  },
  refreshButton: {
    marginLeft: "4px",
  },
};
