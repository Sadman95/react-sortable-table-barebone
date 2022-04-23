import React, { FC } from "react";
import { IColumn } from "../types/column.type";
import { ITable } from "../types/table.type";

interface Props {
  columns: IColumn[];
  tableData: ITable[] | any[];
}

const TableBody: FC<Props> = ({ columns, tableData }) => {
  return (
    <>
      <tbody>
        {tableData.map((data) => (
          <tr key={data.id}>
            {columns.map(({ accessor }, i) => {
              const tData = data[accessor] ? data[accessor] : "__";
              return <td key={i}>{tData}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
