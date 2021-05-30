import React from "react";
import "./LineGraph.css";
import { Line } from "react-chartjs-2";

function LineGraph({ mean, upperBound, lowerBound }) {
  return (
    <div className="lineGraph">
      <Line
        height={160}
        width={400}
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Chance of Rain",
              data: mean,
              borderColor: "rgb(0,0,205)",
              tension: 0.1,
            },
            {
              label: "Upper Bound",
              data: upperBound,
              borderColor: "rgb(255,99,71)",
              tension: 0.1,
            },
            {
              label: "Lower Bound",
              data: lowerBound,
              borderColor: "rgb(255,255,0)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              title: {
                display: true,
                text: "Days",
              },
              beginAtZero: true,
            },
            y: {
              title: {
                display: true,
                text: "%",
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default LineGraph;
