import React from "react";
import "./weatherInfo.css";
import { WiDegrees } from "react-icons/wi";

const WeatherInfo = ({ weatherData, isLoading }) => {
  const { date, text, wind, humidity, pressure, temp, index } = weatherData;
  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (!weatherData) {
    return <h1>No data found!</h1>;
  }

  let banding;
  if (index <= 3) {
    banding = "Low, Enjoy!";
  } else if (index > 3 && index <= 6) {
    banding = "Moderate, Enjoy!";
  } else if (index > 6 && index <= 9) {
    banding = "High, Reduce going out!";
  } else {
    banding = "Very high, Don't go out 🤫";
  }

  let newDate = new Date(date).toDateString();
  newDate = newDate.split(" ");

  return (
    <section>
      <div className="info-1-container">
        <p className="date">
          Today, {newDate[2]} {newDate[1]}
        </p>
        <div className="header-container">
          <h1>{text}</h1>
          <div className="line"></div>
        </div>
        <div className="wind-container">
          <div className="wind">
            <p>Wind speed</p>
            <h2>{wind} km/hr</h2>
          </div>
          <div className="hum">
            <p>Humidity</p>
            <h2>{humidity}%</h2>
          </div>
          <div className="pressure">
            <p>Pressure</p>
            <h2>{pressure} hPa</h2>
          </div>
        </div>
      </div>
      <div className="info-2-container">
        <div className="temp">
          <p>Temp</p>
          <h2>
            {temp}
            <WiDegrees size={35} />C{" "}
          </h2>
        </div>
        <div className="air-quality">
          <p>Air Quality Index</p>
          <h2>{index}</h2>
          <p>{banding}</p>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;
