import React from "react";
import "./App.css";
import VideoBg from "./assets/video.mp4";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const App = () => {
  return (
    <section className="page">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Video */}
      <video src={VideoBg} autoPlay loop muted></video>

      {/* contents */}
      <div className="content">
        <h1>Launching Soon</h1>
        <h3>Leave your email and we'll let you know once the site goes live</h3>

        {/* clock */}
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          labelStyle={{
            fontSize: 10,
            fontWeight: 500,
            textTransform: "uppercase",
            color: "white",
          }}
          digitBlockStyle={{ width: 40, height: 60, fontSize: 40 }}
          dividerStyle={{ color: "black", height: 0 }}
          separatorStyle={{ color: "white", size: "6px" }}
          duration={0.5}
        >
          Finished
        </FlipClockCountdown>

        {/* button */}
        <button className="btn">Notify Me</button>
      </div>
    </section>
  );
};

export default App;
