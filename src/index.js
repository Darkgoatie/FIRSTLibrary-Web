const { render } = require("react-dom");
import "./global.css";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";

import Hello from "./Routes/Home/Hello/Hello";
import Navbar from "./Routes/Home/Navbar/Navbar";
import About from "./Routes/Home/About/About";

render(
  <Router>
    <Routes>
      <Route exact path="/">
        <Navbar />
        <Hello />
        <About />
      </Route>
      <Route>
        <meta http-equiv="refresh" content="0;URL='/'" />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
