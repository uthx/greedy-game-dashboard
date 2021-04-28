import List from "../Home/AppList";
import styled from "styled-components";
import BannerParent from "../Home/Banner";
import { device } from "../../styles/devices";
const Home = () => {
  return (
    <Container>
      <Section>
        <BannerParent />
      </Section>
      <Section>
        <List />
      </Section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  @media ${device.desktop} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Section = styled.div`
  flex: 1;
`;
