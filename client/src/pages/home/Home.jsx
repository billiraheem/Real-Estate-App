import React from "react";
import "./home.scss";
import Search from "../../components/searchBar/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            felis nec lacus vestibulum imperdiet id in justo. Sed ac dapibus
            leo. Sed arcu felis, elementum et est nec, accumsan consequat elit.
          </p>

          <Search />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>2000</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
