import axios from "axios";
var API_KEY = "439d4b804bc8187953eb36d2a8c26a02";

export const fetchCountry = async (data) => {
  console.log(data);
  let url = `https://openweathermap.org/data/2.5/find?q=india&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`;

  if (data) {
    url = `https://api.openweathermap.org/data/2.5/find?q=${data.text}&appid=${API_KEY}`;
  }
  const response = await axios.get(url);
  console.log(response);
  return response.data.list;
};

export const fetchById = async (id) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`;
  const response = await axios.get(url);
  console.log(response, "FetchById");
  return response.data;
};

export const fetchByLatLon = async (res) => {
  console.log(res);
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${res.coord.lat}&lon=${res.coord.lon}&appid=${API_KEY}`;
  const response = await axios.get(url);
  console.log(response, "FetchByLatLon");
  return response.data;
};

export const fetchInitial = async (res) => {
   
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=20&lon=77&appid=${API_KEY}`;
    const response1 = await axios.get(url);
    console.log(response1, "FetchByLatLon");

    return response1.data;
  };
