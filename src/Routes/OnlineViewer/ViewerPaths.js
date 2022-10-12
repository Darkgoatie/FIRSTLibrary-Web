import "./onlineViewer.css";
import { Route, Switch, useParams } from "react-router-dom";

const fixResourceName = (resourceName) => {
  return resourceName.split(" ").join("_");
};

const rList = require("../../resourcesList.json");
console.log(rList);
const pagesList = [];

const ViewerPaths = () => {
  return (
    <Switch>
      <Route exact path="/onlineviewer">
        <div className="section lightdark">
          <h4 className="display-4">
            Please choose a valid link from the downloads page!
          </h4>

          <p className="lead">
            <a href="/downloads">Click here to visit the downloads page.</a>
          </p>
        </div>
      </Route>
      <Route path="/onlineviewer/:documentName">
        <DocumentReader />
      </Route>
    </Switch>
  );
};

const DocumentReader = () => {
  const { documentName } = useParams();
  const rNamesList = rList.map((c) => c.name);
  const originalDocumentName = documentName
    .split("_")
    .join(" ")
    .replace(":", "");
  if (rNamesList.includes(originalDocumentName)) {
    return (
      <div className="documentViewer lightdark">
        <div className="flex-column">
          <h2>Online viewer: "{originalDocumentName}"</h2>

          <p className="lead">
            <embed src={`/resources/${originalDocumentName}`}></embed>
          </p>
        </div>
      </div>
    );
  } else {
    return <meta httpEquiv="refresh" content="0;URL='/onlineviewer'" />;
  }
};

export default ViewerPaths;
