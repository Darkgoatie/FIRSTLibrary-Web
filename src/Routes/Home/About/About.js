import "./About.css";

const About = () => {
  return (
    <div id="about" className="section dark">
      <div className="jumbotron">
        <p className="display-4">
          About the{" "}
          <span
            style={{
              color: "#e4a204",
            }}
          >
            FIRST Library
          </span>
        </p>
        <br />
        <p className="lead">
          The FIRST Library contains FRC sources in various languages. The main
          goal of this project is to make the FRC sources easily accessible to
          foreign students and competitors.
        </p>
      </div>
    </div>
  );
};

export default About;
