import React, { useState, useEffect } from "react";
import HourGraph from "./HourGraph";
import DaysForeCast from "./DaysForeCast";
import moment from "moment";

const ForeCast = ({ HourlyData, DailyData }) => {
  const [visibleDayForeCast, setVisibleDayForeCast] = useState(false);
  var CurrentFormatedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [Data, setData] = useState("");

  const handleAccordion = (e, el) => {
    console.log(el);
    setData(el);
  };

  console.log(DailyData);
  if (HourlyData) {
    return (
      <div className="d-flex">
        <div className="chartjs col-md-6">
          <div className="bar">
            <h3 style={{ display: "flex", marginLeft: "3rem" }}>
              Hourly Forecast
            </h3>
            <div style={{ display: "grid", marginLeft: "3rem" }}>
              <HourGraph HourlyData={HourlyData} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h3 style={{ display: "flex", marginLeft: "3rem" }}>
            8-days forecast
          </h3>
          <div>
            {/* Accordion */}
            {!Data && (
              <div
                className="accordion accordion-flush display-none"
                id="accordionFlushExample"
              >
                {DailyData
                  ? DailyData.map((el, key) => {
                      return (
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id={`flush-heading${key}`}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${key}`}
                              aria-expanded="false"
                              aria-controls={`#flush-collapse${key}`}
                              onClick={(e) => handleAccordion(e, el)}
                            >
                              {moment(Data.dt).format("MMM D, h:mm:ss a")}
                            </button>
                          </h2>
                        </div>
                      );
                    })
                  : ""}
              </div>
            )}
            {Data ? (
              <div className="scrolling-container-header" >
                <ul className="options-scroller">
                  {DailyData.map((el, key) => {
                    return (
                    <button className="Nav-btn" id={key} onClick={e=>{
                      setData(el);
                      
                    }}>{moment(el.dt).format("MMM D, h:mm a")}</button>)
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
            {/* Selected element */}
            {Data && (
              <div>
                <button></button>
                <div>
                  <div className="CurrentDataMain">
                    <h6>
                      Feels like{" "}
                      {`${Math.round(Data.feels_like)}\xB0C. ${
                        Data.weather[0].description
                      }`}
                    </h6>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        className="d-flex"
                        style={{ justifyContent: "center", gap: "2rem" }}
                      >
                        <p className="m-0">
                          {Data.wind_speed ? `${Data.wind_speed}m/s  ` : ""}
                          WSW
                        </p>
                        <p className="m-0">
                          {Data.pressure ? `${Data.pressure}h ` : ""}Pa
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        style={{ justifyContent: "center", gap: "2rem" }}
                      >
                        <p className="m-0">
                          Humidity:
                          {Data.humidity ? ` ${Data.humidity}%` : ""}
                        </p>
                        <p className=" m-0">UV:{Data.uvi ? Data.uvi : ""}</p>
                      </div>
                      <div
                        className="d-flex"
                        style={{ justifyContent: "center", gap: "2rem" }}
                      >
                        <p className="m-0">
                          Dew point:{Data.dew_point ? Data.dew_point : ""}
                        </p>
                        <p className="m-0">
                          Visibility : {Data.visibility ? Data.visibility : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <DaysForeCast DailyData={DailyData} />
      </div>
    );
  } else {
    <h1>ELSE</h1>;
  }
};

export default ForeCast;
