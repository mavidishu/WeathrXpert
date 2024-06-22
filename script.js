// Required Variables
const options = {
	method: "GET",
	headers: {
		"X-Api-Key": "c5agaIOJUqErLvd3uFGBeA==HJZskbBRQqIMLixA",
	},
};

let submit = document.getElementById("submit");
let city = document.getElementById("search");
let title = document.getElementById("title");
let cityName = document.getElementById("cityName");
// Fetching API
const getweather = async(city) => {
	if(navigator.geolocation){
		await navigator.geolocation.getCurrentPosition((result)=>{
			let latitude = result.coords.latitude;
			let longitude = result.coords.longitude;
			fetch(
				`https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`,
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
					dSunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleString('en-IN',{hour: '2-digit',minute: '2-digit',second: '2-digit',timeZone: 'Asia/Kolkata', });
					dSunset.innerHTML =  new Date(response.sunset * 1000).toLocaleString('en-IN',{hour: '2-digit',minute: '2-digit',second: '2-digit',timeZone: 'Asia/Kolkata', });
					dTemp.innerHTML = response.temp;
					dWindDegrees.innerHTML = response.wind_degrees;
					dWindSpeed.innerHTML = response.wind_speed;
					temp.innerHTML = response.temp;
					feels_like.innerHTML = response.feels_like;
					humidity.innerHTML = response.humidity;
					temp.innerHTML = response.temp;
					mainTemp.innerText = response.temp;
					min_temp.innerHTML = response.min_temp;
					max_temp.innerHTML = response.max_temp;
					wind_speed.innerHTML = response.wind_speed;
					sunrise.innerHTML =new Date(response.sunrise * 1000).toLocaleString('en-IN',{hour: '2-digit',minute: '2-digit',second: '2-digit',timeZone: 'Asia/Kolkata', });;
					sunset.innerHTML = new Date(response.sunset * 1000).toLocaleString('en-IN',{hour: '2-digit',minute: '2-digit',second: '2-digit',timeZone: 'Asia/Kolkata', });;
				})
				.catch((err) => {
					console.error(err);
				});
		}, ()=>{
			switch(error.code) {
				case error.PERMISSION_DENIED:
					console.log("User denied the request for Geolocation.");
					break;
				case error.POSITION_UNAVAILABLE:
					console.log("Location information is unavailable.");
					break;
				case error.TIMEOUT:
					console.log("The request to get user location timed out.");
					break;
				case error.UNKNOWN_ERROR:
					console.log("An unknown error occurred.");
					break;
			}
		});
	}else{
		console.log("No Location Access");
	}
	let result = await getLocationName(28.6294016,77.2440064);
	cityName.innerHTML = result;
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



// Geodecoding Function
async function getLocationName(lat, lon) {
	const baseUrl = "https://api.opencagedata.com/geocode/v1/json";
    try {
		const response = await axios.get(baseUrl, {
			params: {
				q: `${lat}+${lon}`,
                key: "40970598aafc483db2f1be98980feaec"
            }
        });
        const locationData = response.data;
        if (locationData.results.length > 0) {
			return locationData.results[0].components.state+", "+locationData.results[0].components.country;
			// return locationData.results[0].formatted;
        } else {
			console.error('No results found');
            return null;
        }
		// console.log(locationData);
    } catch (error) {
		console.error('Error fetching location:', error);
        return null;
    }
}

getweather("Delhi");