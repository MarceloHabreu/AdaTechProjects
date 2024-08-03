const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-location");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("submit");

  if (!input) return;
  const location = input.value;

  if(location.length < 3) {
    alert('The place must have, at least, 3 letters!');
    return;
  }

  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca2c6bf50125fd5847b6b5a06f1c070&lang=en_br&units=metric`)
  const data = await response.json();

  console.log(data);
  

  const infos = {
    temperature : Math.round(data.main.temp),
    local : data.name,
    icon : `https://openweathermap.org/img/wn/${data.weather.icon}/@2x.png`
  }
});
