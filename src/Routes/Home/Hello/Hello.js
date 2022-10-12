import "./Hello.css";

const Hello = () => {
  return (
    <div className="section lightdark" id="welcome">
      <div className="jumbotron">
        <img src="/FirstLibrary.png" className="sectionImage"></img>
        <h1 id="ProjectName" className="display-4">
          <b>The FIRST Library Project</b>
        </h1>
      </div>
    </div>
  );
};

export default Hello;
