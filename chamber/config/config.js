const LAT = "43.8866";
const LON = "-111.6777";
const APIKEY = "ded1cf0795cbc2082a097d8ea264cda8";

const WEATHER_URL_STUB = "./data/weather.json";
const WEATHER_URL_PROD = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}`;

const apiURL = WEATHER_URL_STUB;
