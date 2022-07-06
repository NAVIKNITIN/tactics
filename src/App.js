import "./App.css";
import Search from "./Components/search";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { fetchById, fetchByLatLon, fetchCountry } from "./API/weatherApi";
import Current from "./Components/Current";
import ForeCast from "./Components/ForeCast";

function App() {

  const [selectedCountry, setSelectedCountry] = useState("");
  const [city, setCity] = useState("");
  const [showdrop, setShowDrop] = useState(false);
  const [text, setText] = useState("");
  const [currentData, setCurrentData] = useState();
  const [HourlyData, setHourlyData] = useState();
  const [DailyData, setDailyData] = useState();

  const [FetchByIdData, setFetchByIdData] = useState();
  const [EventData, setEventData] = useState();
  const [initial,setInitial] = useState(true);


 const FetchInitialData = async () => {
  setInitial(false)

    let response = await fetchById();
    setFetchByIdData(response);
    let res2 = await fetchByLatLon(response);
    setCurrentData(res2.current);
    setHourlyData(res2.hourly);
    setEventData(res2.alerts )
    setDailyData(res2.daily)
    setShowDrop(false);
    setText("")
  };
  if(initial){
    FetchInitialData();
  }

  const onSubmitSearch = async (e) => {
    let data = { text: text, page: 1 };
    let response = await fetchCountry(data);
    setCity(response);

    if (text === undefined || text === "") {
      setShowDrop(false);
    } else {
      setShowDrop(true);
    }
  };
console.log(showdrop)
  const onSelectCity = async (e) => {
    setSelectedCountry(e.target.value);
    let response = await fetchById(e.target.value);
    setFetchByIdData(response);
    let res2 = await fetchByLatLon(response);
    setCurrentData(res2.current);
    setHourlyData(res2.hourly);
    setEventData(res2.alerts)
    setShowDrop(false);
    setText("")
  };

  console.log("currentData", currentData);
  console.log("HourlyData", HourlyData);
  console.log("FetchByIdData", FetchByIdData);
  console.log("EventData", EventData);
  console.log("DailyData", DailyData);


  return (
    <div className="App">
      <Search
        onSubmitSearch={onSubmitSearch}
        onSelectCity={onSelectCity}
        text={text}
        city={city}
        selectedCountry={selectedCountry}
        setText={setText}
        showdrop={showdrop}
      />
      <Current 
      currentData={currentData ? currentData : undefined} 
      FetchByIdData={FetchByIdData}
      EventData={EventData}
      />
      {HourlyData && <ForeCast 
      HourlyData={HourlyData}
      DailyData={DailyData}
      />
      }
      
    </div>
  );
}

export default App;
