function displayChosenTimezone(event) {
  let userChosenTimeZoneValue = event.target.value;
  if (userChosenTimeZoneValue.length > 0) {
    let now = moment().tz(`${userChosenTimeZoneValue}`);
    let timezoneTime = now.format("HH:mm:ss");
    let timezoneDate = now.format("ddd, D MMM YYYY");

    let chosenCity = document.querySelector("#chosenCity");
    chosenCity.innerHTML = `${userChosenTimeZoneValue}`;

    let chosenCityTime = document.querySelector("#chosenCityTime");
    chosenCityTime.innerHTML = `${timezoneTime} `;

    let chosenCityDate = document.querySelector("#chosenCitytDate");
    chosenCityDate.innerHTML = `${timezoneDate}`;
  }
}

let userChoice = document.querySelector("#user-chosen-timezones");
userChoice.addEventListener("change", displayChosenTimezone);

function showUserCurrentTimezone() {
  let userCurrentCity = moment.tz.guess();
  let userCity = document.querySelector("#userCurrentTimezone");
  userCity.innerHTML = `${userCurrentCity}`;
  let userTime = document.querySelector("#userCurrentTime");
  userTime.innerHTML = moment().tz(`${userCurrentCity}`).format("HH:mm:ss");
  let userDate = document.querySelector("#userCurrentDate");
  userDate.innerHTML = moment()
    .tz(`${userCurrentCity}`)
    .format("ddd, D MMM YYYY");
}

setInterval(showUserCurrentTimezone, 1000);

let defaultCity = "Asia/Hong_Kong";

let defaultCityName = document.querySelector("#chosenCity");
defaultCityName.innerHTML = `${defaultCity}`;

let defaultCityTime = document.querySelector("#chosenCityTime");
defaultCityTime.innerHTML = moment().tz(`${defaultCity}`).format("HH:mm:ss");

let defaultCityDate = document.querySelector("#chosenCitytDate");
defaultCityDate.innerHTML = moment()
  .tz(`${defaultCity}`)
  .format("ddd, D MMM YYYY");

function changeTimeFormat(event) {
  let userTime = document.querySelector("#userCurrentTime");
  userTime.innerHTML = moment().tz(`${userCurrentCity}`).format("hh:mm:ss A");
}
let timeFormatButton = document.querySelector(".amPmbutton");
timeFormatButton.addEventListener("click", changeTimeFormat);
