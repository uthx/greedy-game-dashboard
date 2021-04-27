//this component will create single Company cards component
import React from "react";
import styled from "styled-components";
import { handleData } from "../helperFunctions";
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { cardColors } from "../../../../styles/colors";
import { companyLogo } from "../../../../styles/logos";
import { Link } from "react-router-dom";

const CompanyCard = ({ cardData, statData }) => {
  const randomCardColor = cardColors[Math.floor(Math.random() * 3)];
  const { appName, publisherName, id } = cardData;

  const { revenue, adRequest, adResponse, impressions } = handleData(statData);
  return (
    <Container>
      <Link
        to={`companyDetails/${publisherName.split(" ").join("")}/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CompanyName cardColor={randomCardColor}>
          <p className="appName">
            <img src={companyLogo[id]} alt="" className="box" />
            {appName}

            <IconArrow />
          </p>
          <p className="publisherName">{publisherName}</p>
        </CompanyName>
      </Link>

      <CompanyDetails>
        <ul>
          <li className="caption">Revenue</li>
          <li className="data">{revenue}</li>
        </ul>
        <ul>
          <li className="caption">Ad Requests</li>
          <li className="data">{adRequest}</li>
        </ul>
        <ul>
          <li className="caption">Ad Response</li>
          <li className="data">{adResponse}</li>
        </ul>
        <ul>
          <li className="caption">Impressions</li>
          <li className="data">{impressions}</li>
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
  ${"img"} {
    height: 5rem;
    width: 5rem;
    float: left;
    margin-right: 1rem;
    border-radius: 5px;
    /* background-color: ${(props) => props.cardColor}; */
  }
  //styling appName
  ${".appName"} {
    font-size: 2rem;
    margin-bottom: 0.2rem;
    font-weight: 500;
    word-spacing: 0.1rem;
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
