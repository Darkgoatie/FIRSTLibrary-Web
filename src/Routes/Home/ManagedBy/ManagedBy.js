import "./ManagedBy.css";

const ManagedBy = () => {
  return (
    <div id="managedby" className="section dark">
      <div className="jumbotron">
        <p className="display-5">
          <span style={{ color: "#e4a204" }}>FIRST Library</span> was brought to
          you by
        </p>
        <a target="_blank" href="https://meisterrobotics.vercel.app/">
          <img src="/Logos/Meister.png" className="managerIcons"></img>
        </a>
        <a target="_blank" href="http://kaiser6989.com/">
          <img src="/Logos/Kaiser.png" className="managerIcons"></img>
        </a>
        <a target="_blank" href="https://www.instagram.com/teamgoldenhorn/">
          <img src="/Logos/GoldenHorn.png" className="managerIcons"></img>
        </a>
      </div>
    </div>
  );
};

export default ManagedBy;
