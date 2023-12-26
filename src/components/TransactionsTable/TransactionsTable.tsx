import React from "react";
import { Column, useTable } from "react-table";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  ExcelButton,
  SectionTitle,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
  TableTitle
} from "./TransactionsTable.styles";
import { TransactionsTableProps } from "./TransactionsTable.interface";
import { Transaction } from "sari-package";

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions
}) => {
  const columns = React.useMemo(
    () =>
      [
        { Header: "Transaction Number", accessor: "transactionNumber" },
        { Header: "Transaction Price", accessor: "transactionPrice" },
        { Header: "Transaction Date", accessor: "transactionDate" },
        { Header: "Region", accessor: "region" },
        { Header: "Property Type", accessor: "propertyType" }
      ] as Column<Transaction>[],
    []
  );

  const { headerGroups, rows, prepareRow } = useTable({
    columns,
    data: transactions.map((transaction) => ({
      ...transaction,
      transactionDate: transaction.transactionDate.substring(0, 10)
    }))
  });

  const downloadExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const formattedData = transactions.map(
      ({
        transactionNumber,
        transactionPrice,
        transactionDate,
        propertyType,
        region
      }) => ({
        "Transaction Number": transactionNumber,
        "Transaction Price": transactionPrice,
        "Transaction Date": transactionDate.substring(0, 10),
        Region: region,
        "Property Type": propertyType
      })
    );

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const wscols = [
      {wch:20},
      {wch:15},
      {wch:15},
      {wch:20},
      {wch:15}
  ];
  ws['!cols'] = wscols;
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    const fileName = "transactions" + fileExtension;
    saveAs(data, fileName);
  };

  return (
    <TableContainer>
      <TableTitle>
        <SectionTitle>Transactions Details:</SectionTitle>
        <ExcelButton onClick={downloadExcel}>Download as Excel</ExcelButton>
      </TableTitle>
      <Table>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeader {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableHeader>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionsTable;
