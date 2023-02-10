function showInfoOfChosenCity(timeInfo) {
  let userChosenTimeZoneValue = timeInfo;
  if (userChosenTimeZoneValue.length > 0) {
    let now = moment().tz(`${userChosenTimeZoneValue}`);
    let timezoneTime = now.format("HH:mm:ss");
    let timezoneDate = now.format("ddd, D MMM YYYY");
    let chosenCityTimeOffset = moment()
      .tz(`${userChosenTimeZoneValue}`)
      .format("[UTC]Z");

    let chosenCity = document.querySelector("#chosenCity");
    chosenCity.innerHTML = `${userChosenTimeZoneValue}`;

    let chosenCityTime = document.querySelector("#chosenCityTime");
    chosenCityTime.innerHTML = `${timezoneTime} `;

    let chosenCityDate = document.querySelector("#chosenCitytDate");
    chosenCityDate.innerHTML = `${timezoneDate}`;

    let chosenCityTimeDifference = document.querySelector(
      "#timeDifferenceChosenCity1"
    );
    chosenCityTimeDifference.innerHTML = `${chosenCityTimeOffset}`;
  }
}

function displayChosenTimezone(event) {
  showInfoOfChosenCity(event.target.value);
}

let userChoice = document.querySelector("#user-chosen-timezones");
userChoice.addEventListener("change", displayChosenTimezone);

function showInfoOfChosenCity2(timeInfo) {
  let userChosenTimeZoneValue = timeInfo;
  if (userChosenTimeZoneValue.length > 0) {
    let now = moment().tz(`${userChosenTimeZoneValue}`);
    let timezoneTime = now.format("HH:mm:ss");
    let timezoneDate = now.format("ddd, D MMM YYYY");
    let chosenCityTimeOffset = moment()
      .tz(`${userChosenTimeZoneValue}`)
      .format("[UTC]Z");

    let chosenCity = document.querySelector("#chosenCity2");
    chosenCity.innerHTML = `${userChosenTimeZoneValue}`;

    let chosenCityTime = document.querySelector("#chosenCityTime2");
    chosenCityTime.innerHTML = `${timezoneTime} `;

    let chosenCityDate = document.querySelector("#chosenCitytDate2");
    chosenCityDate.innerHTML = `${timezoneDate}`;

    let chosenCityTimeDifference = document.querySelector(
      "#timeDifferenceChosenCity2"
    );
    chosenCityTimeDifference.innerHTML = `${chosenCityTimeOffset}`;
  }
}

function displayChosenTimezone2(event) {
  showInfoOfChosenCity2(event.target.value);
}

let userChoice2 = document.querySelector("#user-chosen-timezones2");
userChoice2.addEventListener("change", displayChosenTimezone2);

function showUserCurrentTimezone() {
  let userCurrentCity = moment.tz.guess();
  let userCity = document.querySelector("#userCurrentTimezone");
  userCity.innerHTML = `${userCurrentCity}`;
  let userTime = document.querySelector("#userCurrentTime");
  userTime.innerHTML = moment().tz(`${userCurrentCity}`).format("HH:mm:ss");
  let userDate = document.querySelector("#userCurrentDate");
  userDate.innerHTML = moment()
    .tz(`${userCurrentCity}`)
    .format("dddd, D MMM YYYY");
  let userTimeOffset = document.querySelector("#userCityUTC");
  userTimeOffset.innerHTML = moment().tz(`${userCurrentCity}`).format("[UTC]Z");
}

setInterval(showUserCurrentTimezone, 1000);

function defaultDisplay1() {
  let defaultCity = "Asia/Hong_Kong";

  let defaultCityName = document.querySelector("#chosenCity");
  defaultCityName.innerHTML = `${defaultCity}`;

  let defaultCityTime = document.querySelector("#chosenCityTime");
  defaultCityTime.innerHTML = moment().tz(`${defaultCity}`).format("HH:mm:ss");

  let defaultCityDate = document.querySelector("#chosenCitytDate");
  defaultCityDate.innerHTML = moment()
    .tz(`${defaultCity}`)
    .format("ddd, D MMM YYYY");

  let defaultCityTimeOffset = document.querySelector(
    "#timeDifferenceChosenCity1"
  );
  defaultCityTimeOffset.innerHTML = moment()
    .tz(`${defaultCity}`)
    .format("[UTC]Z");
}
defaultDisplay1();

function defaultDisplay2() {
  let defaultCity = "Asia/Tokyo";

  let defaultCityName = document.querySelector("#chosenCity2");
  defaultCityName.innerHTML = `${defaultCity}`;

  let defaultCityTime = document.querySelector("#chosenCityTime2");
  defaultCityTime.innerHTML = moment().tz(`${defaultCity}`).format("HH:mm:ss");

  let defaultCityDate = document.querySelector("#chosenCitytDate2");
  defaultCityDate.innerHTML = moment()
    .tz(`${defaultCity}`)
    .format("ddd, D MMM YYYY");

  let defaultCityTimeOffset = document.querySelector(
    "#timeDifferenceChosenCity2"
  );
  defaultCityTimeOffset.innerHTML = moment()
    .tz(`${defaultCity}`)
    .format("[UTC]Z");
}
defaultDisplay2();
