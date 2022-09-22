fetch("https://www.prevision-meteo.ch/services/json/bagnolet")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#ville").innerHTML =
      data.city_info.name + '<img src="./Images/lieu.png">';
    document.querySelector("#temperature").innerHTML =
      data.current_condition.tmp +
      " °" +
      '<img src="./Images/temperature.png" height="60%" width="80%">';
    document.querySelector("#vent").innerHTML =
      data.current_condition.wnd_spd +
      " km/h" +
      '<img src="./Images/vent.png" height="40%" width="60%">';
    document.querySelector("#humidite").innerHTML =
      data.current_condition.humidity +
      " %" +
      '<img src="./Images/humidite.png" height="60%" width="60%">';
    document.querySelector("#icon").innerHTML =
      '<img src="' + data.current_condition.icon_big + '">';
  });
