import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import axios from "axios";
import Slider from "./components/Slider";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";

function App() {
  const [mean, setMean] = useState([]);
  const [upperBound, setUpperBound] = useState([]);
  const [lowerBound, setLowerBound] = useState([]);
  const [amount, setAmount] = useState([]);
  const [pressure, setPressure] = useState(1000);
  const [temperature, setTemperature] = useState(22);

  function chanceOfRain() {
    let mean_values = [];
    let upperbound_values = [];
    let lowerbound_values = [];
    amount.forEach((item) => {
      const score =
        Math.log(item + 1) *
        Math.log(pressure - 929) *
        Math.log(temperature - 9);
      const mean = Math.min(Math.max(score, 0), 100);
      const upper_bound = Math.min(1.5 * mean, 100);
      const lower_bound = Math.max(0.5 * mean, 0);
      mean_values.push(mean);
      upperbound_values.push(upper_bound);
      lowerbound_values.push(lower_bound);
    });
    setMean(mean_values);
    setUpperBound(upperbound_values);
    setLowerBound(lowerbound_values);
  }

  useEffect(() => {
    chanceOfRain();
    // eslint-disable-next-line
  }, [amount, pressure, temperature]);

  useEffect(() => {
    (async function () {
      const res = await axios(
        "https://private-4945e-weather34.apiary-proxy.com/weather34/rain"
      );
      let amountOfRain = [];
      res.data[0].days.forEach((item) => {
        amountOfRain.push(item.amount);
      });
      setAmount(amountOfRain);
    })();
  }, []);

  const barGraphMemo = useMemo(() => {
    return <BarGraph amount={amount} />;
  }, [amount]);

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__name">Weather DashBoard</div>
      </div>
      <div className="app__body">
        <Slider
          name="Pressure [hPa]"
          sliderValue={pressure}
          setSliderValue={setPressure}
          min="970"
          max="1030"
        />
        <LineGraph
          mean={mean}
          upperBound={upperBound}
          lowerBound={lowerBound}
        />
        <Slider
          name="Temperature [॰C]"
          sliderValue={temperature}
          setSliderValue={setTemperature}
          min="10"
          max="35"
        />
        {barGraphMemo}
      </div>
    </div>
  );
}

export default App;
