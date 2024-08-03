"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-location");
const sectionWeatherInfo = document.querySelector("#weather-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionWeatherInfo)
        return;
    const location = input.value;
    if (location.length < 3) {
        alert("The place must have, at least, 3 letters!");
        return;
    }
    try {
        const response = yield fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca2c6bf50125fd5847b6b5a06f1c070&lang=en_br&units=metric`);
        const data = yield response.json();
        const infos = {
            temperature: Math.round(data.main.temp),
            local: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
        sectionWeatherInfo.innerHTML = `
    <div class="weather-data">
          <h2>${infos.local}</h2>
  
          <span>${infos.temperature}°C</span>
     </div>
  
      <img src="${infos.icon}" alt="">
    `;
    }
    catch (err) {
        console.log("Gave an error in getting the data from the API", err);
    }
}));
