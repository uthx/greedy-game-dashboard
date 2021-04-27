import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { pageColors } from "../../../styles/colors";
import { companyLogo } from "../../../styles/logos";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";
import TableRow from "./TableRow";
import { useRouteMatch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchById, fetchAll } from "../../../redux/index";
const FullDetail = (props) => {
  //Loding the States from Store
  const { allAppsData } = useSelector((state) => state.allApps); //allAppsData = allCompanyDetailsByName
  const { allStatsData } = useSelector((state) => state.allStats); //allStatsData = allCompanyDetailsByStats
  const { appDataByIdStats } = useSelector((state) => state.byId); //appDataById = companyDetailsByStatsById
  let isStoreFilled = allAppsData && allStatsData ? true : false;
  console.log(isStoreFilled);
  console.log({ allAppsData, allStatsData, appDataByIdStats });
  //Extractions
  const dispatch = useDispatch();
  const { params } = useRouteMatch();
  const { id } = params;

  const companyNameData = allAppsData
    ? allAppsData.find((el) => el.id === id)
    : null;

  const companyStatsData = isStoreFilled
    ? allStatsData[id]
    : appDataByIdStats
    ? appDataByIdStats
    : null;
  React.useEffect(() => {
    if (!isStoreFilled) {
      dispatch(fetchAll());
      dispatch(fetchById(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let randomCardColor = "#6156DC";
  console.log(isStoreFilled);
  console.log({ companyNameData, companyStatsData });

  return (
    <div>
      <Container>
        <Navbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="navbar_title">ADSOUL</span>
          </Link>
        </Navbar>
        {companyStatsData && companyNameData ? (
          <>
            <CompanyName cardColor={randomCardColor}>
              <p className="appName">
                <Link to="/">
                  <IconArrow />
                </Link>
                <img src={companyLogo[id]} alt="" className="box" />
                {companyNameData.appName}
              </p>
              <p className="publisherName">{companyNameData.publisherName}</p>
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
                <tbody>
                  {companyStatsData.map((stats) => (
                    <TableRow key={uuidv4()} data={stats} />
                  ))}
                </tbody>
              </table>
            </DetailTable>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
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
  ${"img"} {
    height: 5rem;
    width: 5rem;
    float: left;
    margin-right: 1rem;
    border-radius: 5px;
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
