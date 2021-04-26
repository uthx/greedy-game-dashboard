import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll, fetchAllStats } from "../../../../redux";
import styled from "styled-components";
import { Settings } from "@styled-icons/ionicons-sharp/Settings";
import { pageColors } from "../../../../styles/colors";
import CompanyCard from "./CompanyCard";

const List = () => {
  const { allAppsData, loading } = useSelector((state) => state.allApps);
  const { loading: statsLoaded, allStatsData } = useSelector(
    (state) => state.allStats
  );
  const dispatch = useDispatch();

  console.log("from apps ", loading, allAppsData);
  console.log("from stats", statsLoaded, allStatsData);
  useEffect(() => {
    dispatch(fetchAll());
    dispatch(fetchAllStats());
  }, [dispatch]);

  console.log("after useEffect");
  if (allStatsData && allAppsData.length) {
    console.log("Done Loading All the Data");
  }

  return (
    <Container>
      <MiniNav>
        <span>Apps</span>
        <SettingIcon />
      </MiniNav>
      <CompanyList>
        {allStatsData && allAppsData.length ? (
          allAppsData.map((card) => {
            return (
              <CompanyCard
                key={card.id}
                cardData={card}
                statData={allStatsData[card.id]}
              />
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </CompanyList>
    </Container>
  );
};

export default List;

const Container = styled.div`
  height: 100vh;
  background-color: ${pageColors.offWhite};
  overflow: hidden;
`;

const MiniNav = styled.div`
  display: inline-block;
  background-color: #ffffff;
  width: 100%;
  padding: 3rem;
  padding-top: 5rem;
  ${"span"} {
    font-size: 3rem;
    font-weight: 500;
  }
`;

const SettingIcon = styled(Settings)`
  color: grey;
  width: 3rem;
  height: 3.4rem;
  float: right;
  margin-right: 0.5rem;
`;

const CompanyList = styled.div`
  padding: 2rem 3rem 0 3rem;
  overflow-y: scroll;
  height: 80%;
  box-sizing: border-box;
`;
