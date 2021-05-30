import React from "react";
import "./BarGraph.css";
import { Bar } from "react-chartjs-2";

function BarGraph({ amount }) {
  return (
    <div className="barGraph">
      <Bar
        height={160}
        width={400}
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Amount of Rainfall",
              data: amount,
              backgroundColor: "rgb(0,0,205)",
              borderColor: "rgb(0,0,205)",
              borderWidth: 1,
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
                text: "l/m²",
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default BarGraph;
