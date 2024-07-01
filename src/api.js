export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cf7c2b9daamshdda2b0c9d5727cep10de1cjsnb10e1d2159f1",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "56072b0d14fa5b5460d09636eb9804c8"; // enter your key from openweather API

try {
	const response = await fetch(GEO_API_URL, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}