window.addEventListener("load", () => {
	let long;
	let lat;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);

			long = position.coords.longitude;
			lat = position.coords.latitude;
			console.log(long, lat);

			// const proxy = "https://cors-anywhere.herokuapp.com/";

			const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=aae516d8d0d0689378583bab648a1981`;
			console.log(api);

			fetch(api)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
				});
		});
	}
});
