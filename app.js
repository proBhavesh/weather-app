const des = document.getElementById("zone");
const temp_a = document.querySelector(".temp");
const type_a = document.querySelector(".type-text");

console.log(des.innerHTML);

window.addEventListener("load", () => {
	let long;
	let lat;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			// console.log(position);

			long = position.coords.longitude;
			lat = position.coords.latitude;
			// console.log(long, lat);

			// const proxy = "https://cors-anywhere.herokuapp.com/";

			const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=aae516d8d0d0689378583bab648a1981`;
			console.log(api);

			fetch(api)
				.then((response) => {
					// console.log(response);
					return response.json();
				})
				.then((data) => {
					console.log(data);
					const temperatue = data.main.temp - 273.15;
					const temp_feels_like = data.main.feels_like;
					const define = data.weather[0].main;
					const time_zone = data.name;

					console.log(temperatue, temp_feels_like, define, time_zone);

					des.innerHTML = time_zone;
					temp_a.innerHTML = temperatue;
					type_a.innerHTML = define;
				});
		});
	}
});
