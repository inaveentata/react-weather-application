import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search/Search";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

function App() {
  const [searchPlace, setSearchPlace] = useState("vizag");
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      if (searchPlace.length >= 4) {
        try {
          const resp = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=93492c2d7a4647e2a9f50431220106&q=${searchPlace}&aqi=yes`
          );
          if (resp.data) {
            const { current, location } = resp.data;
            const {
              last_updated,
              condition,
              wind_kph,
              humidity,
              pressure_mb,
              feelslike_c,
              air_quality,
            } = current;
            const { country, region, name } = location;

            const info1 = {
              date: last_updated,
              wind: wind_kph,
              humidity,
              pressure: pressure_mb,
              temp: feelslike_c,
            };
            const { text, icon } = condition;
            const index = air_quality["gb-defra-index"];

            const info2 = { country, region, name };
            const finalData = { ...info1, ...info2, text, icon, index };
            setWeatherData(finalData);
          } else {
            setWeatherData([]);
          }
        } catch (error) {
          console.log(error.response);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchPlace]);
  return (
    <main>
      <Search
        searchPlace={searchPlace}
        setSearchPlace={setSearchPlace}
        weatherData={weatherData}
      />
      <WeatherInfo weatherData={weatherData} isLoading={isLoading} />
    </main>
  );
}

/* 

//search
1.searchPlace, setSearchPlace
2.name, region,country

//weather info
1.date
2.condition.text
3.wind
4.humidity
5.pressure
6.temp
7.airquality


const {current,location} = resp.data

const {last_updated,condition, wind_kph, humidity,pressure_mb,feelslike_c,air_qualuty} = current

//air_quality.gb-defra-index

const info1 = {date:last_updated,condition:codition,wind:wind_kph,humidity, pressure:pressur_mb,temp:feelslike_c,air_quality} 
// condition.text , condition.icon

//time format : "2022-06-01 17:00"

const {country, region, name} = location
const info2 = {country,region, name}
const finalData = {...info1, info2}
 */

export default App;
