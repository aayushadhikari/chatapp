import React from "react";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <button>online</button>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <button>close</button>
      </a>
    </div>
  </div>
);

export default InfoBar;
