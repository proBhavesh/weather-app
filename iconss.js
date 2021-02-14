const skycons = new Skycons({ color: "white" });

skycons.add(document.getElementById("icon1"), Skycons.CLEAR);

// if you're using the Forecast API, you can also supply
// strings: "partly-cloudy-day" or "rain".

// start animation!
skycons.play();
