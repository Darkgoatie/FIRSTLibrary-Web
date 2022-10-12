const { render } = require("react-dom");
import "./global.css";
import "./footer.css";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";

import Hello from "./Routes/Home/Hello/Hello";
import Navbar from "./Routes/Home/Navbar/Navbar";
import About from "./Routes/Home/About/About";
import Resources from "./Routes/Home/Resources/Resources";
import ManagedBy from "./Routes/Home/ManagedBy/ManagedBy";
import Downloads from "./Routes/Downloads/Downloads";
import ViewerPaths from "./Routes/OnlineViewer/ViewerPaths";

render(
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/">
        <Hello />
        <About />
        <Resources />
        <ManagedBy />
      </Route>
      <Route exact path="/downloads">
        <Downloads />
      </Route>
      <Route path="/onlineviewer">
        <ViewerPaths />
      </Route>
      <Route>
        <meta httpEquiv="refresh" content="0;URL='/'" />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
