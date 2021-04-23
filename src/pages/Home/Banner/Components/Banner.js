import React from "react";

import Asset from "../../../../assets/asset1.svg";
import { pageColors } from "../../../../styles/colors";
import styled from "styled-components";
const Banner = () => {
  return (
    <Container>
      <p>ADSOUL</p>
      <img src={Asset} alt="" />
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  background-color: ${pageColors.primary};
  padding: 1rem;
  height: 50vh;
  ${"p"} {
    color: white;
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
  }
  ${"img"} {
    display: block;
    margin: auto;
  }
`;
