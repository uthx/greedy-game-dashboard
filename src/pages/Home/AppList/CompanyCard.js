//this component will create single Company cards component
import React from "react";
import styled from "styled-components";
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { cardColors } from "../../../styles/colors";
const CompanyCard = ({ cardData }) => {
  const randomCardColor = cardColors[Math.floor(Math.random() * 3)];
  const { appName, publisherName } = cardData;
  return (
    <Container>
      <CompanyName cardColor={randomCardColor}>
        <p className="appName">
          <span src="" alt="" className="box" />
          {appName}
          <IconArrow />
        </p>
        <p className="publisherName">{publisherName}</p>
      </CompanyName>
      <CompanyDetails>
        <ul>
          <li className="caption">Revenue</li>
          <li className="data">100M</li>
        </ul>
        <ul>
          <li className="caption">Ad Requests</li>
          <li className="data">100M</li>
        </ul>
        <ul>
          <li className="caption">Ad Response</li>
          <li className="data">100M</li>
        </ul>
        <ul>
          <li className="caption">Impressions</li>
          <li className="data">100M</li>
        </ul>
      </CompanyDetails>
    </Container>
  );
};

export default CompanyCard;

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  margin-top: 1rem;
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

const IconArrow = styled(ArrowRightShort)`
  color: gray;
  height: 5rem;
  width: 4rem;
  float: right;
`;
const CompanyDetails = styled.div`
  display: flex;

  ${"ul"} {
    list-style: none;
  }
  ${"ul .caption"} {
    font-size: 1.5rem;
  }
  ${"ul .data"} {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
