import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TestingArea = ({ HourlyData }) => {

if(HourlyData !== undefined) {
    let FilteredData = HourlyData.slice(0,8)
  var datas = {
    labels: 
        (FilteredData.map((el)=>el.weather[0].description))
      ,
    datasets: [{
        type: 'bar',
        label: 'POP',
        data: (FilteredData.map((el)=>el.pop * 200)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'lightgreen'
      }, {
        type: 'line',
        label: 'Temperature',
        data: (FilteredData.map((el)=>el.temp)),
        fill: true,
        borderColor: 'rgb(54, 162, 235)',
      }]
  };

}
  return (
    <div className="chartjs">
      <div className="bar">
        <Bar data={datas} style={{width:"100%",overflow:"scroll"}}></Bar>
      </div>
    </div>
  );
};

export default TestingArea;
