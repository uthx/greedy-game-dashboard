import React from "react";
import styled from "styled-components";
const TableRow = ({ data }) => {
  const { date, revenue, adRequest, adResponse, impressions, clicks } = data;
  const renderRate = ((impressions / adResponse) * 100).toFixed(0);
  console.log(renderRate);
  return (
    <>
      <Tr>
        <Td>{date}</Td>
        <Td>{revenue}</Td>
        <Td>{adRequest}</Td>
        <Td>{adResponse}</Td>
        <Td>{impressions}</Td>
        <Td>{clicks}</Td>
        <Td>{renderRate}%</Td>
      </Tr>
    </>
  );
};

export default TableRow;
const Tr = styled.tr`
  border: 1px solid lightgrey;
`;

const Td = styled.td`
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  color: #525252;
`;
