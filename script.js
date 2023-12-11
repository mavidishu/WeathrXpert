// Required Variables
const options = {
	method: "GET",
	headers: {
		"X-Api-Key": "c5agaIOJUqErLvd3uFGBeA==HJZskbBRQqIMLixA",
	},
};

submit = document.getElementById("submit");
city = document.getElementById("search");

// Fetching API
const getweather = (city) => {
	cityName.innerHTML = city;
	console.log(typeof city);
	fetch(
		"https://api.api-ninjas.com/v1/weather?city=" + city,
		options,
		(method = "no-cors")
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			cloud_pct.innerHTML = response.cloud_pct;
			dCloudPct.innerHTML = response.cloud_pct;
			dFeelsLike.innerHTML = response.feels_like;
			dHumidity.innerHTML = response.humidity;
			dMaxTemp.innerHTML = response.max_temp;
			dMinTemp.innerHTML = response.min_temp;
			dSunrise.innerHTML = response.sunrise;
			dSunset.innerHTML = response.sunset;
			dTemp.innerHTML = response.temp;
			dWindDegrees.innerHTML = response.wind_degrees;
			dWindSpeed.innerHTML = response.wind_speed;
			temp.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			// wind_degrees.innerHTML  = response.wind_degrees
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
		})
		.catch((err) => {
			console.error(err);
		});
};

submit.addEventListener("click", (e) => {
	cityVal = city.value;
	e.preventDefault();
	if (cityVal.trim() !== "") {
		getweather(cityVal);
	} else {
		alert("Please enter location to search");
	}
});

getweather("Delhi");