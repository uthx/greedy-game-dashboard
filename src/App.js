import CompanyDetails from "./pages/CompanyDetails";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/companyDetails/:companyName/:id" component={CompanyDetails} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;
`;
