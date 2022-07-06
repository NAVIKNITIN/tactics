import React, { useState, useEffect } from "react";
import HourGraph from "./HourGraph";
import DaysForeCast from "./DaysForeCast";
import moment from "moment";

const ForeCast = ({ HourlyData, DailyData }) => {
  const [visibleDayForeCast, setVisibleDayForeCast] = useState(false);
  var CurrentFormatedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [Data, setData] = useState("");
  const [classActive, setclassActive] = useState("");

  const handleAccordion = (e, el, key) => {
    console.log(el);
    setData(el);
    setclassActive(key);
  };
  const handleAccordion2 = (e, el) => {
    console.log(el);
    setData("");
    setclassActive("");
  };

  console.log(Data, `Data`);
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
                        <div
                          className="accordion-item"
                          style={{ height: "45px" }}
                        >
                          <h2
                            className="accordion-header"
                            id={`flush-heading${key}`}
                          >
                            <button
                              className="accordion-button collapsed p-2 m-0"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${key}`}
                              aria-expanded="false"
                              aria-controls={`#flush-collapse${key}`}
                              onClick={(e) => handleAccordion(e, el, key)}
                            >
                              <div className="row col-md-12">
                                <div className="col-md-4">
                                  {moment(Data.dt).format("MMM D, h:mm:ss a")}
                                </div>
                                <div className="col-md-4">
                                  <img
                                    alt={el.name}
                                    style={{ height: "50px", width: "50px" }}
                                    src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                                  ></img>
                                  {Math.round(el.temp.max)}/{`${Math.round(el.temp.min)} \xB0C`}
                                </div>
                                <div className="col-md-4">
                                  {el.weather[0].description}
                                </div>
                              </div>
                            </button>
                          </h2>
                        </div>
                      );
                    })
                  : ""}
              </div>
            )}
            {Data && (
              <div
                className="accordion accordion-flush display-none"
                id="accordionFlushExample"
              >
                <div style={{ position: "relative" }}>
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${classActive}`}
                    aria-expanded="false"
                    aria-controls={`#flush-collapse${classActive}`}
                    onClick={(e) => handleAccordion2(e, Data)}
                  ></button>
                  <div style={{ overflow: "hidden" }}>
                    {Data ? (
                      <div
                        className="accordion-item"
                        style={{
                          width: "90%",
                          display: "inline-block",
                          overflowX: "auto",
                          left: 0,
                          position: "absolute",
                          zIndex: 20000000,
                          top: 0,
                        }}
                      >
                        <ul
                          className="accordion-header"
                          style={{ display: "flex", width: "fit-content" }}
                        >
                          {DailyData.map((el, key) => {
                            return (
                              <button
                                style={{ width: "150px" }}
                                className={`Nav-btn ${
                                  classActive === key ? "btn-active" : ""
                                }`}
                                id={key}
                                onClick={(e) => {
                                  setData(el);
                                  setclassActive(key);
                                }}
                              >
                                {moment(el.dt).format("MMM D, h:mm a")}
                              </button>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            )}

            {Data && (
              <div>
                <div>
                  <div className="CurrentDataMain">
                    <img
                      alt={Data.name}
                      style={{ height: "60px", width: "50px" }}
                      src={`http://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`}
                    ></img>
                    <h5>{Data.weather[0].description}.</h5>
                  </div>
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
