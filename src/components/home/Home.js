import React from "react";
import "./home.scss"

function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="textContainer">
          <h1>Khushi Mittal</h1>
          <h2>Web developer</h2>
          <div className="buttons">
            <button>Hire Me</button>
            <button>Resume</button>
          </div>
        </div>
      </div>
      {/* <div className="imageContainer">
        <img src="/images/me1.jpg" alt="can't display" />
      </div> */}
    </div>
  );
}

export default Home;
