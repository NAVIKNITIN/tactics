import React from "react";
import { Bar } from "react-chartjs-2";

const HourGraph = ({ HourlyData }) => {
  if (HourlyData !== undefined) {
    let FilteredData = HourlyData.slice(0, 8);
    var datas = {
      labels: FilteredData.map((el) => el.weather[0].description),
      datasets: [
        {
          type: "bar",
          label: "POP",
          data: FilteredData.map((el) => el.pop * 200),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "lightgreen",
        },
        {
          type: "line",
          label: "Temperature",
          data: FilteredData.map((el) => el.temp),
          fill: true,
          borderColor: "rgb(54, 162, 235)",
        },
      ],
      options: {
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return value + " °C";
              },
            },
          },
        },
      },
    };
  }
  return (
    <div className="chartjs">
      <div className="bar">
        <Bar
          data={datas}
          style={{ width: "100%", overflow: "scroll" }}
          options={datas.options}
        ></Bar>
      </div>
    </div>
  );
};

export default HourGraph;
