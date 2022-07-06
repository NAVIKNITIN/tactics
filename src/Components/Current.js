import React from "react";
import moment from "moment";
import Loader from "./Loader";
const Current = ({ currentData, FetchByIdData, EventData }) => {
  console.log(EventData);

  if (currentData) {
    var CurrentFormatedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    return (
      <div className="grid-container m-4">
        <div className="col-md-5 m-4">
          <small style={{ color: "#eb6e4b" }}>{CurrentFormatedDate}</small>
          <h3>
            {FetchByIdData.name} {" , "} {FetchByIdData.sys.country}
          </h3>
          <h1>
            <img
            alt={FetchByIdData.name}
              src={`http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`}
            ></img>
            {`${Math.round(currentData.temp)}\xB0C`}
          </h1>
          {EventData && (
            <button
              style={{
                color: "white",
                backgroundColor: "#eb6e4b",
                borderRadius: "8px",
                border: "none",
              }}
            >
              {EventData ? EventData[0].event : ""}
            </button>
          )}

          <div >
            <h6>
              Feels like{" "}
              {`${Math.round(currentData.feels_like)}\xB0C. ${
                currentData.weather[0].description
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
                  {currentData.wind_speed
                    ? `${currentData.wind_speed}m/s  `
                    : ""}
                  WSW
                </p>
                <p className="m-0">
                  {currentData.pressure ? `${currentData.pressure}h ` : ""}Pa
                </p>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "center", gap: "2rem" }}
              >
                <p className="m-0">
                  Humidity:
                  {currentData.humidity ? ` ${currentData.humidity}%` : ""}
                </p>
                <p className=" m-0">
                  UV:{currentData.uvi ? currentData.uvi : ""}
                </p>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "center", gap: "2rem" }}
              >
                <p className="m-0">
                  Dew point:{currentData.dew_point ? currentData.dew_point : ""}
                </p>
                <p className="m-0">
                  Visibility :{" "}
                  {currentData.visibility ? currentData.visibility : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Current;
