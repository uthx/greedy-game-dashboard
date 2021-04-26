import CompanyDetails from "./pages/CompanyDetails";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/companyDetails/:companyName/:id"
              component={CompanyDetails}
            />
          </Switch>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;
`;
