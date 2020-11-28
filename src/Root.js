import React from "react";
import { routes } from "./routes";
// import MainTemplate from "./templates/MainTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import SiteContext from "./context";

const Root = () => {
  return (
    <>
      <GlobalStyles />
      <SiteContext.Provider value={{ products }}>
        <BrowserRouter>
          {/* <MainTemplate> */}
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route path={routes.collections} component={Collections} />
            <Route path={routes.gallery} component={Gallery} />
            <Route path={routes.contact} component={Contact} />
          </Switch>
          {/* </MainTemplate> */}
        </BrowserRouter>
      </SiteContext.Provider>
    </>
  );
};

export default Root;
