import * as Router from "react-router-dom";
import * as Themes from "src/themes";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Themes.Main>
    <Router.BrowserRouter>
      <Pages.Main />
    </Router.BrowserRouter>
  </Themes.Main>
);
