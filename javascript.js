function displayChosenTimezone(event) {
  let userChosenTimeZoneValue = event.target.value;
  if (userChosenTimeZoneValue.length > 0) {
    let now = moment().tz(`${userChosenTimeZoneValue}`);
    let timezoneTime = now.format("dddd, MMMM D, HH:mm:ss");

    let chosenCity = document.querySelector("#chosenCity");
    chosenCity.innerHTML = `${userChosenTimeZoneValue}`;

    let chosenCityDate = document.querySelector("#chosenCityDate");
    chosenCityDate.innerHTML = `${timezoneTime} `;
  }
}

let userChoice = document.querySelector("#user-chosen-timezones");
userChoice.addEventListener("change", displayChosenTimezone);

function showUserCurrentTimezone() {
  let userCurrentCity = moment.tz.guess();
  let userCity = document.querySelector("#userCurrentTimezone");
  userCity.innerHTML = `${userCurrentCity}`;
  let userTime = document.querySelector("#userCurrentTime");
  userTime.innerHTML = moment()
    .tz(`${userCurrentCity}`)
    .format("dddd, MMMM D, HH:mm:ss");
}

setInterval(showUserCurrentTimezone, 1000);
