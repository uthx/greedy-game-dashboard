import React from "react";
import styled from "styled-components";
import { pageColors } from "../../../../styles/colors";
import FillRate from "../../../../assets/icon1.svg";
import ImproveCtr from "../../../../assets/icon2.svg";
import RefreshRate from "../../../../assets/icon3.svg";
import QuickIntegration from "../../../../assets/icon4.svg";
const RevenueOptimization = () => {
  return (
    <Container>
      <p className="title">Revenue Optimization</p>
      <GridContainer>
        <div>
          <img src={FillRate} alt="" />
          <p className="caption">FIll Rate</p>
        </div>
        <div>
          <img src={ImproveCtr} alt="" />
          <p className="caption">Improve CTR</p>
        </div>
        <div>
          <img src={RefreshRate} alt="" />
          <p className="caption">Refresh Rate</p>
        </div>
        <div>
          <img src={QuickIntegration} alt="" />
          <p className="caption">Quick Integration</p>
        </div>
      </GridContainer>
    </Container>
  );
};

export default RevenueOptimization;

const Container = styled.div`
  background-color: ${pageColors.secondary};
  padding: 3rem 3rem 3rem 5rem;
  height: 50vh;

  ${"p"} {
    color: white;
  }
  ${".title"} {
    font-size: 3rem;
  }
  ${"img"} {
    height: 3.9rem;
  }
  ${".caption"} {
    font-size: 1.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
