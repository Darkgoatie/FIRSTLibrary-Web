import "./Resources.css";

const Resources = () => {
  return (
    <div id="resources" className="section">
      <div className="jumbotron">
        <p className="display-4">
          {"Resources & "}
          <span
            style={{
              color: "#e4a204",
            }}
          >
            {"Downloads"}
          </span>
        </p>
        <p className="lead">
          You can access the library resources via{" "}
          <a
            href="https://drive.google.com/drive/folders/1BNf105In3cE7y8J3K8LXpBElbkIieM0r"
            target={"_blank"}
            style={{
              color: "#e4a204",
            }}
          >
            Google Drive
          </a>
          , or download{" "}
          <a
            href={"/FIRST-Library.zip"}
            target={"_blank"}
            style={{ color: "#e4a204" }}
            download
          >
            all resources in bulk directly
          </a>{" "}
          from this website
        </p>
        <p
          style={{
            fontFamily: "Helvetica Neue",
            color: "red",
            fontSize: "13px",
          }}
          className="lead"
        >
          WARNING:{" "}
          <span style={{ color: "black" }}>
            Mobile devices might not support bulk download, however you can
            access the files via Google Drive.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Resources;
