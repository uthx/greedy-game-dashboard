import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { pageColors } from "../../../styles/colors";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";
import { newMockData, mockCompanyData } from "../../../Api/mockData/demo";
import TableRow from "./TableRow";
import { useRouteMatch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchById, fetchAll } from "../../../redux/index";
const FullDetail = (props) => {
  // const { appDataByIdStats } = useSelector((state) => state.byId);
  const { allAppsData } = useSelector((state) => state.allApps);
  const { allStatsData } = useSelector((state) => state.allStats);
  const { appDataByIdStats } = useSelector((state) => state.byId);
  const [companyName, setCompanyName] = useState();
  const [companyStats, setCompanyStats] = useState();

  const dispatch = useDispatch();
  const randomCardColor = "#6156DC";
  const { params } = useRouteMatch();
  const { id } = params;

  const appDataRec = allAppsData.length ? allAppsData : null;
  const selectedData = appDataRec
    ? appDataRec.find((el) => el.id === id)
    : null;
  const selectedStat = (() => {
    if (appDataByIdStats) return appDataByIdStats;
    if (allStatsData) return allStatsData[id];

    return null;
  })();
  // console.log("selectedStat", selectedStat);
  // console.log("selectedData", selectedData);

  // allStatsData ? allStatsData[id] : null;
  console.log("Data", selectedData);
  console.log("Stat", selectedStat);
  useEffect(() => {
    if (!allAppsData.length || !allStatsData) {
      dispatch(fetchAll());
      dispatch(fetchById(id));
    }
  }, []);
  console.log("appbyid called ", appDataByIdStats);
  // const [companyDetails, setCompanyDetails] = useState({
  //   appName: "",
  //   publisherName: "",
  // });

  // useEffect(() => {
  //   dispatch(fetchAll());
  //   dispatch(fetchById(id));
  // }, [dispatch, id]);

  return (
    <div>
      {/* <Container>
        <Navbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="navbar_title">ADSOUL</span>
          </Link>
        </Navbar>
        {appDataByIdStats.length && allAppsData.length ? (
          <>
            <CompanyName cardColor={randomCardColor}>
              <p className="appName">
                <Link to="/">
                  <IconArrow />
                </Link>
                <span src="" alt="" className="box" />
                {companyDetails.appName}
              </p>
              <p className="publisherName">{companyDetails.publisherName}</p>
            </CompanyName>
            <DetailTable>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Revenue</th>
                    <th>Ad Requests</th>
                    <th>Ad Responses</th>
                    <th>Impressions</th>
                    <th>Clicks</th>
                    <th>Render Rate</th>
                  </tr>
                </thead>
                <tbody>newData</tbody>
              </table>
            </DetailTable>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container> */}
      <h1>Hellow</h1>
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
  padding: 3rem;
  ${".navbar_title"} {
    color: white;
    text-align: left;
    font-size: 1.7rem;
    font-weight: bold;
    padding-left: 4rem;
    letter-spacing: 0.2rem;
    margin: 0;
    margin-bottom: 1rem;
    text-decoration: none;
  }
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

const DetailTable = styled.div`
  width: 90%;
  margin: 3rem auto;

  ${`table`} {
    width: 100%;
    border-collapse: collapse;
  }
  ${"tr > th"} {
    padding: 2rem;
    font-weight: 550;
    font-size: 1.5rem;
  }
  ${"tr"} {
    border: 1px solid lightgray;
  }
`;

// const { appName, publisherName } = mockCompanyData[id - 1];
// const newData = newMockData[id].map((row) => {
//   return <TableRow key={id} data={row} />;
// });
// if (appDataByIdStats.length && allAppsData.length) {
//   console.log("under inf fdfdfdfdf88888888888888888888888")
//   console.log(appDataByIdStats);
//   console.log(allAppsData);
// }
