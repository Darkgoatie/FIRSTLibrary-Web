const { render } = require("react-dom");
import "./global.css";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";

import Hello from "./Routes/Home/Hello";

render(
  <Router>
    <Routes>
      <Route exact path="/">
        <Hello />
      </Route>
      <Route>
        <meta http-equiv="refresh" content="0;URL='/'" />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
