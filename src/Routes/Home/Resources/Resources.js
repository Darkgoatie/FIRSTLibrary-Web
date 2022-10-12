import "./Resources.css";

const Resources = () => {
  return (
    <div id="resources" className="section lightdark">
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
          <a href={"/downloads"} style={{ color: "#e4a204" }}>
            Visit the downloads page <br />
            <br />
            <i className="fa-solid fa-download fa-2xl"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Resources;
