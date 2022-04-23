import React, { useState } from "react";
import dummyData from "../data.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
  const [tableData, setTableData] = useState(dummyData);

  const columns = [
    { label: "Full Name", accessor: "full_name", sortable: true },
    { label: "Email", accessor: "email", sortable: false },
    { label: "Gender", accessor: "gender", sortable: true },
    { label: "Age", accessor: "age", sortable: true },
    { label: "Start date", accessor: "start_date", sortable: true },
  ];

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (sortField) {
      const sorted = [...tableData].sort((a: any, b: any) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <>
      <table>
        <caption>React Sortable Table</caption>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;
