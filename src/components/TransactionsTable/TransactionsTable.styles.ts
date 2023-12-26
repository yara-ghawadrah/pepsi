import styled from "styled-components";
import { sectionStyle } from "../../theme";

export const TableContainer = styled.div`
  ${sectionStyle}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: ${({ theme }) => theme.color.tableRow};
  color: ${({ theme }) => theme.color.text};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.tableRow};
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
  color: ${({ theme }) => theme.color.text};
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
`;

export const ExcelButton = styled.button`
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #bf4f50;
  }
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
