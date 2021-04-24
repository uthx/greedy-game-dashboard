import React from "react";
import { mockCompanyData } from "../../../../Api/mockData/demo";
import styled from "styled-components";
import { Settings } from "@styled-icons/ionicons-sharp/Settings";
import { pageColors } from "../../../../styles/colors";
import CompanyCard from "./CompanyCard";

const List = () => {
  const CompanyCards = mockCompanyData.map((card) => {
    return <CompanyCard key={card.id} cardData={card} />;
  });
  return (
    <Container>
      <MiniNav>
        <span>Apps</span>
        <SettingIcon />
      </MiniNav>
      <CompanyList>{CompanyCards}</CompanyList>
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
