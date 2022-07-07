import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
const HourGraph = ({ HourlyData }) => {
  console.log(HourlyData)
  if (HourlyData) {
    let filterData = HourlyData.slice(0, 8);
    console.log(filterData)
    var datas = {
      labels: filterData.map((el) =>el.weather[0].description),
      datasets: [
        {
          type: "bar",
          label: "POP",
          data: filterData && filterData.map((el) => el.pop && el.pop * 200),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "lightgreen",
        },
        {
          type: "line",
          label: "Temperature",
          data:filterData && filterData.map((el) => el.temp && el.temp),
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
        <Chart
          data={datas}
          style={{ width: "100%", overflow: "scroll" }}
          options={datas.options}
        ></Chart>
      </div>
    </div>
  );
};

export default HourGraph;
