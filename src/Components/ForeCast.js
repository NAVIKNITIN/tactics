import React, { useState, useEffect } from "react";
import TestingArea from "./TestingArea";


const ForeCast = ({ HourlyData }) => {
  if(HourlyData){
    return (
      <div className="d-flex">
        <div className="chartjs col-md-6">
          <div className="bar">
            <h3 style={{display:"flex",marginLeft:"3rem"}}>Hourly Forecast</h3>
            <div style={{display:"grid",marginLeft:"3rem"}} >
            <TestingArea HourlyData={HourlyData}/>
            </div>
            
          </div>
        </div>
        <div className="col-md-6">
          <h3 style={{display:"flex",marginLeft:"3rem"}}>8-days forecast</h3>
          
        </div>
      </div>
    );
  }else{
    <h1>ELSE</h1>
  }
  
};

export default ForeCast;
