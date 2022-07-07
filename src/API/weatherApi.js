import axios from "axios";
var API_KEY = "039785c140a57c78992ac26af76998a5";

//For fetching the Country Data by Search input
export const fetchCountry = async (data) => {
  console.log(data);
  let url = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&appid=${API_KEY}`;

  if (data) {
    url = `https://api.openweathermap.org/data/2.5/find?q=${data.text}&appid=${API_KEY}`;
  }
  const response = await axios.get(url);
  console.log(response);
  return response.data.list;
};

//For Fetching the Weather Data by Id
export const fetchById = async (id) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=1269750&appid=${API_KEY}`;
    if(id){
        url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`;
    }
  
  const response = await axios.get(url);
  console.log(response, "FetchById");
  return response.data;
};

//Fetching weather Data by Latitude and Longitude
export const fetchByLatLon = async (res) => {
  console.log(res);
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=20&lon=77&appid=${API_KEY}`;
  if(res){
    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${res.coord.lat}&lon=${res.coord.lon}&appid=${API_KEY}`;
  }
  
  const response = await axios.get(url);
  console.log(response, "FetchByLatLon");
  return response.data;
};

//Fetching Data for initial Render
export const fetchInitial = async (res) => {
   
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=20&lon=77&appid=${API_KEY}`;
    const response1 = await axios.get(url);
    console.log(response1, "FetchByLatLon");

    return response1.data;
  };
