import React, { FC, useState } from "react";
import { IColumn } from "../types/column.type";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

interface Props {
  columns: IColumn[];
  handleSorting: (accessor: string, sortOrder: string) => void;
}

const TableHead: FC<Props> = ({ columns, handleSorting }: Props) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <>
      <thead>
        <tr>
          {columns.map(({ label, accessor, sortable }, i) => (
            <th
              key={i}
              onClick={sortable ? () => handleSortChange(accessor) : undefined}
            >
              {label}
              {order === "asc" && <BiUpArrow />}
              {order === "desc" && <BiDownArrow />}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
