
const Api_key = "df86fec8f4eda4b1e244cc4c9b29a7d8"



async function get() {
let input = document.querySelector("input");
let city = input.value.toLowerCase().trim();
 let data = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`)}`);
  let finalData = await data.json()
  console.log(finalData)
 
  let main_div = document.createElement("main_div");
  main_div.style.height = "400px";
  main_div.style.width = "80" + "%";
  main_div.style.backgroundColor = "#57afcd";
  main_div.style.marginTop = "50px"
  main_div.style.display = "flex";
  main_div.style.justifyContent = "center"
  main_div.style.flexWrap = "wrap"

  let main = document.querySelector(".main");
  main.append(main_div)
  let name_div = document.createElement("div");
  name_div.textContent = `City Name :  ${finalData.name}`;
  name_div.style.height = "50px";
  name_div.style.width = "150px";
  name_div.style.borderRadius = "5px"
  name_div.style.backgroundColor = "#169689";
  name_div.style.marginLeft = "50px";
  name_div.style.marginTop = "100px";
  name_div.style.display= "flex";
  name_div.style.justifyContent = "center";
  name_div.style.alignItems = "center";
  name_div.style.fontSize= "17px";
  name_div.style.fontWeight = "700";

  input.value = " ";

  let temp_div = document.createElement("div");
  temp_div.textContent = `Temprature :  ${finalData.main.temp}`;
 temp_div.style.height = "50px";
 temp_div.style.width = "150px";
 temp_div.style.borderRadius = "5px"
  temp_div.style.backgroundColor = "#169689";
 temp_div.style.marginLeft = "50px";
 temp_div.style.marginTop = "100px";
 temp_div.style.display= "flex";
temp_div.style.justifyContent = "center";
temp_div.style.alignItems = "center";
  temp_div.style.fontSize= "17px";
 temp_div.style.fontWeight = "700";

  let temp_min = document.createElement("div");
  temp_min.textContent = `Temprature Min :  ${finalData.main.temp_min}`;
 temp_min.style.height = "50px";
 temp_min.style.width = "200px";
 temp_min.style.borderRadius = "5px"
  temp_min.style.backgroundColor = "#169689";
 temp_min.style.marginLeft = "50px";
 temp_min.style.marginTop = "100px";
 temp_min.style.display= "flex";
temp_min.style.justifyContent = "center";
temp_min.style.alignItems = "center";
 temp_min.style.fontSize= "17px";
 temp_min.style.fontWeight = "700";

 let temp_max = document.createElement("div");
  temp_max.textContent = `Temprature Max :  ${finalData.main.temp_max}`;
 temp_max.style.height = "50px";
 temp_max.style.width = "200px";
 temp_max.style.borderRadius = "5px"
  temp_max.style.backgroundColor = "#169689";
 temp_max.style.marginLeft = "50px";
 temp_max.style.marginTop = "100px";
 temp_max.style.display= "flex";
temp_max.style.justifyContent = "center";
temp_max.style.alignItems = "center";
 temp_max.style.fontSize= "17px";
 temp_max.style.fontWeight = "700";


 let country = document.createElement("div");
  country.textContent = `Country:  ${finalData.sys.country}`;
 country.style.height = "50px";
 country.style.width = "200px";
 country.style.borderRadius = "5px"
  country.style.backgroundColor = "#169689";
 country.style.marginLeft = "50px";
 country.style.marginTop = "100px";
 country.style.display= "flex";
country.style.justifyContent = "center";
country.style.alignItems = "center";
 country.style.fontSize= "17px";
 country.style.fontWeight = "700";



 let sunrise = document.createElement("div");
  sunrise.textContent = `Sunrise:  ${finalData.sys.sunrise}`;
 sunrise.style.height = "50px";
 sunrise.style.width = "200px";
 sunrise.style.borderRadius = "5px"
  sunrise.style.backgroundColor = "#169689";
 sunrise.style.marginLeft = "50px";
//sunrise.style.marginTop = "5px";
 sunrise.style.display= "flex";
sunrise.style.justifyContent = "center";
sunrise.style.alignItems = "center";
 sunrise.style.fontSize= "17px";
 sunrise.style.fontWeight = "700";


  let sunset = document.createElement("div");
  sunset.textContent = `Sunset :  ${finalData.sys.sunset}`;
 sunset.style.height = "50px";
 sunset.style.width = "200px";
 sunset.style.borderRadius = "5px"
  sunset.style.backgroundColor = "#169689";
sunset.style.marginLeft = "50px";
//sunset.style.marginTop = "5px";
 sunset.style.display= "flex";
sunset.style.justifyContent = "center";
sunset.style.alignItems = "center";
 sunset.style.fontSize= "17px";
 sunset.style.fontWeight = "700";


 let speed = document.createElement("div");
  speed.textContent = `Speed :  ${finalData.wind.speed}`;
 speed.style.height = "50px";
 speed.style.width = "200px";
 speed.style.borderRadius = "5px"
  speed.style.backgroundColor = "#169689";
speed.style.marginLeft = "50px";
//sunset.style.marginTop = "5px";
 speed.style.display= "flex";
speed.style.justifyContent = "center";
speed.style.alignItems = "center";
 speed.style.fontSize= "17px";
 speed.style.fontWeight = "700";

 let deg = document.createElement("div");
  deg.textContent = `Deg:  ${finalData.wind.deg}`;
 deg.style.height = "50px";
 deg.style.width = "200px";
 deg.style.borderRadius = "5px"
  deg.style.backgroundColor = "#169689";
deg.style.marginLeft = "50px";
//sunset.style.marginTop = "5px";
 deg.style.display= "flex";
deg.style.justifyContent = "center";
deg.style.alignItems = "center";
 deg.style.fontSize= "17px";
 deg.style.fontWeight = "700";


  let gust = document.createElement("div");
 gust.textContent = `Gust :  ${finalData.wind.gust}`;
 gust.style.height = "50px";
 gust.style.width = "200px";
 gust.style.borderRadius = "5px"
  gust.style.backgroundColor = "#169689";
gust.style.marginLeft = "50px";
//sunset.style.marginTop = "5px";
gust.style.display= "flex";
gust.style.justifyContent = "center";
gust.style.alignItems = "center";
 gust.style.fontSize= "17px";
 gust.style.fontWeight = "700";

 main_div.appendChild(name_div)
  main_div.appendChild(temp_div)
  main_div.appendChild(temp_min)
  main_div.appendChild(temp_max)
  main_div.appendChild(country)
 main_div.appendChild(sunrise)
  main_div.appendChild(sunset)
 main_div.appendChild(speed)
  main_div.appendChild(deg)
  main_div.appendChild(gust)

}




 
  
   
  
