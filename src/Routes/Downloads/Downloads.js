import { useEffect, useState } from "react";
import "./Downloads.css";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const fixResourceName = (resourceName) => {
  return resourceName.split(" ").join("_");
};

const Downloads = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function reportMessage() {
    alert(
      "You can contact us via email if you'd like to report a false translation!"
    );
  }

  const rList = require("../../resourcesList.json");
  const listElements = [];

  if (windowSize.innerWidth > 800) {
    rList.forEach((file) => {
      listElements.push(
        <div className="resourcesListElement">
          <h4 className="itemName">{file.name}</h4>
          <div className="itemButtons">
            <a
              className="itemDownloadButton"
              download
              href={`/resources/${file.name}`}
            >
              <i class="fa-solid fa-lg fa-download"></i>
            </a>
            <a
              href={`/onlineviewer/:${fixResourceName(file.name)}`}
              className="itemEye"
            >
              <i class="fa-solid fa-lg fa-eye"></i>
            </a>
            <a
              href="#footer"
              onClick={reportMessage}
              className="itemReportButton"
            >
              <i class="fa-solid fa-lg fa-flag"></i>
            </a>
          </div>
        </div>
      );
    });
  } else {
    rList.forEach((file) => {
      listElements.push(
        <div className="resourcesListElement">
          <h5 className="itemName">{file.name}</h5>
          <div className="itemButtons">
            <a
              className="itemDownloadButton"
              download
              href={`/resources/${file.name}`}
            >
              <i class="fa-solid fa-xl fa-download"></i>
            </a>
            <a
              href="#footer"
              onClick={reportMessage}
              className="itemReportButton"
            >
              <i class="fa-solid fa-xl fa-flag"></i>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="downloadsSection">
      <h1>List of Resources:</h1>
      <div>{listElements}</div>
    </div>
  );
};

export default Downloads;
