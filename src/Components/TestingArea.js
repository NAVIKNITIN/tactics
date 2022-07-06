import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TestingArea = ({ HourlyData }) => {
  const [POP, setPOP] = useState("");
  const [TEMP, setTEMP] = useState("");
  const [DESCRIPTION, setDESCRIPTION] = useState("");

if(HourlyData !== undefined) {

  var datas = {
    labels: 
        (HourlyData.map((el)=>el.weather[0].description))
      ,
    datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: (HourlyData.map((el)=>el.pop * 100)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'lightgreen'
      }, {
        type: 'line',
        label: 'Line Dataset',
        data: (HourlyData.map((el)=>el.temp)),
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
