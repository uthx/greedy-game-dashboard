import AppDetails from "./pages/AppDetails";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={AppDetails} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  text-align: center;
`;
