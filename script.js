const Key = `16d9ea0132915be2e323a80702d726ed`;

function isPureString(city) {
  city = city.trim();
  return typeof city === "string" && !/^\d+$/.test(city) && city.length > 0;
}

function submit() {
  const city = document.getElementById("in1").value;
  if (isPureString(city)) {
    getWeather(city);
  } else {
    alert("Enter Valid city name");
    document.getElementById("in1").value = "";
    document.getElementById("in1").focus();
  }
}

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setWeather(data);
};

const setWeather = (data) => {
  try {
    const Weather = document.getElementById("weather");
    Weather.style.color = "#2c3e50";

    const Temperature = document.getElementById("temperature");
    const Pressure = document.getElementById("pressure");
    const Humidity = document.getElementById("humidity");
    const Cloud = document.getElementById("cloud");
    const Country = document.getElementById("country");

    Temperature.innerText = `Temp : ${data.main.temp} `;
    Cloud.innerText = `${data.weather[0].main} sky `;
    Pressure.innerText = `pressure : ${data.main.pressure}pa`;
    Humidity.innerText = `Humidity :${data.main.humidity} %`;
    Country.innerText = `Country : ${data.sys.country}`;
  } catch (error) {
    document.getElementById("temperature").innerText = "City Not Found";
    document.getElementById("pressure").innerText = "Try again";
    document.getElementById("humidity").innerText = "";
    document.getElementById("cloud").innerText = "";
    document.getElementById("country").innerText = "";
  }
};

function submit1() {
  const city = "kolkata";
  getWeather1(city);
}

const getWeather1 = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setWeather1(data);
};

const setWeather1 = (data) => {
  const Temperature = document.getElementById("temperature1");
  const Pressure = document.getElementById("pressure1");
  const Humidity = document.getElementById("humidity1");
  const Cloud = document.getElementById("cloud1");
  const bttn = document.getElementById("bt1");

  if (bttn.innerText == "View") {
    Temperature.innerText = `Temp : ${data.main.temp} `;
    Cloud.innerText = `${data.weather[0].main} sky `;
    Pressure.innerText = `pressure : ${data.main.pressure} hpa`;
    Humidity.innerText = `Humidity :${data.main.humidity} %`;
    bttn.innerText = `Hide`;
  } else {
    Temperature.innerText = " ";
    Cloud.innerText = " ";
    Pressure.innerText = " ";
    Humidity.innerText = "";
    bttn.innerText = "View";
  }
};

function submit2() {
  const city = "delhi";
  getWeather2(city);
}

const getWeather2 = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setWeather2(data);
};

const setWeather2 = (data) => {
  const Temperature = document.getElementById("temperature2");
  const Pressure = document.getElementById("pressure2");
  const Humidity = document.getElementById("humidity2");
  const Cloud = document.getElementById("cloud2");
  const bttn = document.getElementById("bt2");

  if (bttn.innerText == "View") {
    Temperature.innerText = `Temp : ${data.main.temp} `;
    Cloud.innerText = `${data.weather[0].main} sky `;
    Pressure.innerText = `pressure : ${data.main.pressure} hpa`;
    Humidity.innerText = `Humidity :${data.main.humidity} %`;
    bttn.innerText = `Hide`;
  } else {
    Temperature.innerText = " ";
    Cloud.innerText = " ";
    Pressure.innerText = " ";
    Humidity.innerText = "";
    bttn.innerText = "View";
  }
};

function submit3() {
  const city = "Mumbai";
  getWeather3(city);
}

const getWeather3 = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setWeather3(data);
};

const setWeather3 = (data) => {
  const Temperature = document.getElementById("temperature3");
  const Pressure = document.getElementById("pressure3");
  const Humidity = document.getElementById("humidity3");
  const Cloud = document.getElementById("cloud3");
  const bttn = document.getElementById("bt3");

  if (bttn.innerText == "View") {
    Temperature.innerText = `Temp : ${data.main.temp} `;
    Cloud.innerText = `${data.weather[0].main} sky `;
    Pressure.innerText = `pressure : ${data.main.pressure} hpa`;
    Humidity.innerText = `Humidity :${data.main.humidity} %`;
    bttn.innerText = `Hide`;
  } else {
    Temperature.innerText = " ";
    Cloud.innerText = " ";
    Pressure.innerText = " ";
    Humidity.innerText = "";
    bttn.innerText = "View";
  }
};
