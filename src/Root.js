import React from "react";
import { routes } from "./routes";
import MainTemplate from "./templates/MainTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import VermilionContext from "./context";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections/Collections";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact";

const Root = () => {
  return (
    <>
      <GlobalStyles />
      <VermilionContext.Provider value={{}}>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route path={routes.about} component={About} />
              <Route path={routes.collections} component={Collections} />
              <Route path={routes.gallery} component={Gallery} />
              <Route path={routes.contact} component={Contact} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </VermilionContext.Provider>
    </>
  );
};

export default Root;
