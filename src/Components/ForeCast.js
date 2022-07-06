import React, { useState, useEffect } from "react";
import TestingArea from "./TestingArea";


const ForeCast = ({ HourlyData }) => {
  if(HourlyData){
    return (
      <div className="grid-container d-flex">
        <div className="chartjs col-md-6">
          <div className="bar">
            <h3>Hourly Forecast</h3>
            <TestingArea  HourlyData={HourlyData}/>
          </div>
        </div>
        <div className="col-md-6">
          <h3>8 days forecast</h3>
        </div>
      </div>
    );
  }else{
    <h1>ELSE</h1>
  }
  
};

export default ForeCast;
