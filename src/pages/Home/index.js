import AppList from "./AppList/AppList";
import Banner from "./Banner/Components/Banner";
import RevenueOptimization from "./Banner/Components/RevenueOptimization";
import styled from "styled-components";
import BannerParent from "../Home/Banner";
const Home = () => {
  return (
    <Container>
      <Section>
        <BannerParent />
      </Section>
      <Section>
        <AppList />
      </Section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Section = styled.div`
  flex: 1;
`;
