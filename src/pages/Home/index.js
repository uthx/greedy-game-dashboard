import List from "../Home/AppList";
import styled from "styled-components";
import BannerParent from "../Home/Banner";
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
`;

const Section = styled.div`
  flex: 1;
`;
