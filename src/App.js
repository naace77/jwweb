import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/MainLayout";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/Story" component={Main} />
          <Route exact path="/" component={Profile} />
          <Route exact path="/Project" component={Project} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
