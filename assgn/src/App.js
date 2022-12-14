import "./App.css";
import React from "react";
import bg from "./images/bg.jpg";
import bluesq from "./images/bluesq.jpeg";
import stack from "./images/stack.png";
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import youtube from "./images/youtube.png";
import hpy from "./images/thhs.png";
import commerce from "./images/commerce.png";
import employment from "./images/employment.png";
import energy from "./images/energy.png";
import gender from "./images/gender.png";
import reading from "./images/reading.png";
import skill from "./images/skill.png";
import tree from "./images/tree.png";
import play from "./images/play.png";
import left from "./images/left.png";
import right from "./images/right.png";

function Moonproject(props) {
  return <div>#MoonProject</div>;
}

function LeftPanel(props) {
  const ls = [bluesq, stack, linkedin, facebook, instagram, youtube];

  let arr = ls.map(function (item) {
    return <img className="list-images" src={item}></img>;
  });

  return arr;
}
function Folder_data(props) {
  const ls = [
    [reading, "Child Education"],
    [tree, "Tree Plantation"],
    [gender, "Gender Inclusivity"],
    [employment, "Employment Generation"],
    [commerce, "Cause Driven Consumerism"],
    [skill, "Skill Training"],
    [energy, "Renewable Energy Adoption"],
  ];

  let arr = ls.map(function (item) {
    return (
      <span>
        <img className="folder-images" src={item[0]}></img>

        <div className="folder-images-text">{item[1]}</div>
      </span>
    );
  });
  return arr;
}
function Selector(props) {
  let data = ["Visit NsN co", "Invite Friends", "We are hiring", "Play Invite"];
  let [selected, setselected] = React.useState([true, false, false, false]);

  function clicked(index) {
    let arr = [false, false, false, false];
    arr[index] = true;

    setselected(arr);
  }

  let arr = data.map(function (item, index) {
    return (
      <div
        className="selector-item"
        style={{
          backgroundColor: selected[index]
            ? "rgba(252,52,108,1)"
            : "rgba(255,255,255,0.5)",
          cursor: "pointer",
        }}
        onClick={(item) => clicked(index)}
      >
        {item}
      </div>
    );
  });
  return arr;
}
function Slider(props) {
  let episode = props.episode;
  let duration = props.duration;
  let description = props.description;
  let head_photo = props.image;
  return (
    <div className="slide-container">
      <div
        style={{
          backgroundImage: "url(" + bg + ")",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          borderRadius: "20px",
          marginRight: "20px",

          height: "150px",
        }}
      >
        <img src={play} style={{ width: "50px", height: "50px" }}></img>
      </div>
      <div style={{}}>
        <div style={{ fontSize: "30px" }}>Episode {episode}</div>
        <div style={{ color: "Gray" }}>Duration: {duration}</div>
        <div className="description">{description} </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <div className="leftpane">
        <LeftPanel />
      </div>
      <div className="appbackground">
        <div className="container-main">
          <div className="moon-project">#MoonProject</div>
          <div className="happy-show">
            <img src={hpy} style={{ width: "35%", height: "80%" }}></img>
          </div>
          <div className="folder">
            <Folder_data />
          </div>
          <div className="folder2">
            <div className="folder2-text">
              Lorem, t, accusantium consectetur veniam udiandae autem adipisci
              aut voluptatum, doloremquesoluta dolor dolores.
            </div>
          </div>
          <div className="selector">
            <Selector />
          </div>
        </div>
      </div>
      <div className="sliderbackground">
        <div className="leftarrow">
          <img className="arrow" src={left}></img>
        </div>
        <div className="mid-section">
          <Slider
            episode="1"
            duration="20 min"
            description="Lorem,Lorem, t, accusantium consectetur veniam udiandae autem adipisci
              aut voluptatum, doloremquesoluta dolor dolores. Lorem,Lorem, t, accusantium consectetur veniam udiandae autem adipisci
              aut voluptatum, doloremquesoluta dolor dolores. Lorem,Lorem, t, accusantium consectetur veniam udiandae autem adipisci
              aut voluptatum, doloremquesoluta dolor dolores. "
            image={bg}
          />
        </div>
        <div className="rightarrow">
          <img src={right} className="arrow"></img>
        </div>
      </div>
    </div>
  );
}
export default App;
