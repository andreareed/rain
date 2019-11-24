import React from "react"
import makeItRain from "./rainMaker"
import "./rain.css"

const Rain = () => {
  const rain = makeItRain()
  return (
    <>
      <div id="rain-body" className="back-row-toggle splat-toggle">
        <div className="rain front-row">
          {rain.map(({ front }, i) => (
            <div key={`front-${i}`} className="drop" style={front.dropStyle}>
              <div className="stem" style={front.stemStyle}></div>
              <div className="splat" style={front.splatStyle}></div>
            </div>
          ))}
        </div>
        <div className="rain back-row">
          {rain.map(({ back }, i) => (
            <div key={`front-${i}`} className="drop" style={back.dropStyle}>
              <div className="stem" style={back.stemStyle}></div>
              <div className="splat" style={back.splatStyle}></div>
            </div>
          ))}
        </div>
      </div>
      <div className="credit">
        Built from{" "}
        <a
          href="https://codepen.io/arickle/pen/XKjMZY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aaron Rickle's Rain Effect
        </a>
      </div>
    </>
  )
}

export default Rain
