// import Image from "next/image";
// import styles from "./page.module.css";
//import MTable from "./components/MaterialTable";

import MTable from "../components/MaterialTable";

export default function Home() {
  const newsLetter = [
    {
      title:
        "BYD’s rise in China, First Republic goes to JPMorgan, and Apple’s health coaching service",
      source: "Vested",
      status: "UNREAD",
    },
    {
      title:
        "Why Is Everyone So Mean to Me? Overcoming NegativityExploring the reasons why individuals may behave in an unkind manner, it can help to detach oneself from such…",
      link: "https://medium.com/@goodmenproject/why-is-everyone-so-mean-to-me-overcoming-negativity-1c9aaa103f5f?source=email-7bbdb3a883ed-1683924888305-digest.reader-1ab68867dfab-1c9aaa103f5f----3-2------------------705e105e_1bdb_4939_ab5b_3543125b23c2-31",
      source: "Medium",
      status: "UNREAD",
    },
  ];
  //create columns with title,source,link,status as heading
  const columns = [
    { title: "Title", field: "title" },
    { title: "Source", field: "source" },
    { title: "Link", filed: "link" },
    { title: "Status", field: "status" },
  ];

  return (
    <main style={styles.main}>
      {/* <div>
        <h1>My Newsletters</h1>
      </div> */}
      <div>
        {" "}
        <MTable columns={columns} data={newsLetter} title="My Newsletters" />
      </div>

      {/* <div>
        <table
          style={{ border: "0px solid black", padding: "2px" }}
          rules="all"
        >
          <tr>
            <th>Title</th>
            <th>Source</th>
            <th>Link</th>
            <th>Status</th>
          </tr>
          {newsLetter.map((item, key) => (
            //write code here for displaying title,source,link,status in table
            <tr key={key}>
              <td>{item.title}</td>
              <td>{item.source}</td>
              <td>{item.link}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </table>
      </div> */}
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

//react component of table with tiltle, source, link, status as heading
//table data should be fetched from database
//use json server for database
//use axios for fetching data from database
//use useEffect for fetching data from database
//use useState for storing data from database
//use map to iterate over data and display in table
//use nextjs for routing
//use nextjs for image optimization
//use tailwind for styling
//use css module for styling
//code this
