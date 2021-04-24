import React from "react";
import styled from "styled-components";
import { pageColors } from "../../styles/colors";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";
import { newMockData, mockCompanyData } from "../../Api/mockData/demo";
import TableRow from "./TableRow";
import { useRouteMatch, Link } from "react-router-dom";

const FullDetail = () => {
  const randomCardColor = "#6156DC";
  const { params } = useRouteMatch();
  const { id } = params;
  const { appName, publisherName } = mockCompanyData[id - 1];
  const newData = newMockData[id].map((row) => {
    return <TableRow key={id} data={row} />;
  });

  return (
    <div>
      <Container>
        <Navbar> ADSOUL</Navbar>
        <CompanyName cardColor={randomCardColor}>
          <p className="appName">
            <Link to="/">
              <IconArrow />
            </Link>
            <span src="" alt="" className="box" />
            {appName}
          </p>
          <p className="publisherName">{publisherName}</p>
        </CompanyName>
        <NewTable>
          <table>
            <thead>
              <th>Date</th>
              <th>Revenue</th>
              <th>Ad Requests</th>
              <th>Ad Responses</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Render Rate</th>
            </thead>
            <tbody>{newData}</tbody>
          </table>
        </NewTable>
      </Container>
    </div>
  );
};

export default FullDetail;

const Container = styled.div`
  height: 100vh;
`;
const Navbar = styled.div`
  width: 100%;
  background-color: ${pageColors.primary};
  color: white;
  text-align: left;
  font-size: 1.7rem;
  font-weight: bold;
  padding: 3rem;
  padding-left: 4rem;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;

const CompanyName = styled.div`
  overflow: auto;
  ${"span"} {
    height: 5rem;
    width: 5rem;
    float: left;
    margin-right: 1rem;
    border-radius: 5px;
    background-color: ${(props) => props.cardColor};
  }
  //styling appName
  ${".appName"} {
    font-size: 2rem;
    margin-bottom: 0.2rem;
    font-weight: 500;
  }
  //styling Publisher name
  ${".publisherName"} {
    margin-top: 0rem;
    font-size: 1.2rem;
  }
`;

const IconArrow = styled(ArrowLeftShort)`
  color: gray;
  height: 5rem;
  width: 4rem;
  float: left;
  margin-left: 2rem;
  margin-right: 2rem;
`;
//styling table data

const NewTable = styled.div`
  width: 90%;
  margin: 3rem auto;

  ${`table`} {
    width: 100%;
    border-collapse: collapse;
  }
  ${"thead > th"} {
    padding: 2rem;
    font-weight: 550;
    font-size: 1.5rem;
  }
  ${"thead"} {
    border: 1px solid lightgray;
  }
`;
