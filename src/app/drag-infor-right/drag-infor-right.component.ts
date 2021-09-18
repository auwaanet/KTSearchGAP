import { Component, OnInit } from '@angular/core';
declare var $: any;
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-drag-infor-right',
  templateUrl: './drag-infor-right.component.html',
  styleUrls: ['./drag-infor-right.component.css']
})
export class DragInforRightComponent implements OnInit {

  link:any =""
  fname:any=""
  lat:any=""
  lng:any=""
  date_now:any=""
  time_now:any=""
  time_24h:any=""
  temp_current :any=""
  humidity_current :any=""
  pressure_current :any=""
  visibility_current :any=""
  wind_speed_current :any=""
  uvi_current :any=""
  class_image_current :any=""
  cloud_current:any=""
  description_current:any="66a3163fe23933863f181a720517775c"
  area_id:any=""
  getGrowthbyareaid = "http://203.170.129.207/kasettrackservices_v2/getGrowthByareaID/"
  avartar_image:any=""
  constructor(private route: ActivatedRoute,private http:HttpClient,private Router:Router) { }
  closeBtn(){
    $(".drag-box-2").css("display", "none");
    $(".overlay-btn-showmenu").css("display", "block");

  }
  ngOnInit(): void {
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=14.749081&";
let lon = "lon=101.358396&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=66a3163fe23933863f181a720517775c";
let file = queryUrl + lat + lon + apiOptions + apiKey;

fetch(file)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    
    // Weather main data
    let main = data.current.weather[0].main;
    let description = data.current.weather[0].description;
    let temp = Math.round(data.current.temp);
    let pressure = data.current.pressure;
    let humidity = data.current.humidity;
    let name = data.timezone;

    $("#wrapper-description").html(description);
    $("#wrapper-temp").html(temp + "°C");
    $("#wrapper-pressure").html(pressure);
    $("#wrapper-humidity").html(humidity);
    $("#wrapper-name").html(name);


    // Weather hourly data
    let hourNow = data.hourly[0].temp;
    let hour1 = data.hourly[1].temp;
    let hour2 = data.hourly[2].temp;
    let hour3 = data.hourly[3].temp;
    let hour4 = data.hourly[4].temp;
    let hour5 = data.hourly[5].temp;
    let hour6 = data.hourly[6].temp;
    let hour7 = data.hourly[7].temp;
    let hour8 = data.hourly[5].temp;
    let hour9 = data.hourly[6].temp;
    let hour10 = data.hourly[10].temp;

    $("#wrapper-hour-now").html(hourNow + "°");
    $("#wrapper-hour1").html(hour1 + "°");
    $("#wrapper-hour2").html(hour2 + "°");
    $("#wrapper-hour3").html(hour3 + "°");
    $("#wrapper-hour4").html(hour4 + "°");
    $("#wrapper-hour5").html(hour5 + "°");
    $("#wrapper-hour6").html(hour6 + "°");
    $("#wrapper-hour7").html(hour7 + "°");
    $("#wrapper-hour8").html(hour8 + "°");
    $("#wrapper-hour9").html(hour9 + "°");
    $("#wrapper-hour10").html(hour10 + "°");


    // Time
    let timeNow = new Date().getHours();
    let time1 = timeNow + 1;
    let time2 = time1 + 1;
    let time3 = time2 + 1;
    let time4 = time3 + 1;
    let time5 = time4 + 1;
    let time6 = time5 + 1;
    let time7 = time6 + 1;
    let time8 = time7 + 1;
    let time9 = time8 + 1;
    let time10 = time9 + 1;

    // document.getElementById("wrapper-time1").innerHTML = time1;
    // document.getElementById("wrapper-time2").innerHTML = time2;
    // document.getElementById("wrapper-time3").innerHTML = time3;
    // document.getElementById("wrapper-time4").innerHTML = time4;
    // document.getElementById("wrapper-time5").innerHTML = time5;


    
    $("#wrapper-time1").html(time1);
    $("#wrapper-time2").html(time2);
    $("#wrapper-time3").html(time3);
    $("#wrapper-time4").html(time4);
    $("#wrapper-time5").html(time5);
    $("#wrapper-time6").html(time6);
    $("#wrapper-time7").html(time7);
    $("#wrapper-time8").html(time8);
    $("#wrapper-time9").html(time9);
    $("#wrapper-time10").html(time10);



    // Weather daily data
    let tomorrowTemp = Math.round(data.daily[0].temp.day);
    let dATTemp = Math.round(data.daily[1].temp.day);
    let tomorrowMain = data.daily[0].weather[0].main;
    let dATTempMain = data.daily[1].weather[0].main;

    $("#wrapper-forecast-temp-today").html(  temp + "°");
    $("#wrapper-forecast-temp-tomorrow").html(tomorrowTemp + "°");
    $("#wrapper-forecast-temp-dAT").html(dATTemp + "°");



    // Icons
    let iconBaseUrl = "http://openweathermap.org/img/wn/";
    let iconFormat = ".png";

    // Today
    let iconCodeToday = data.current.weather[0].icon;
    let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
    // document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;
    $("#wrapper-icon-today").attr("src",iconFullyUrlToday);

    // Tomorrow
    let iconCodeTomorrow = data.daily[0].weather[0].icon;
    let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;

    $("#wrapper-icon-tomorrow").attr("src",iconFullyUrlTomorrow);


    // Day after tomorrow
    let iconCodeDAT = data.daily[1].weather[0].icon;
    let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
    $("#wrapper-icon-dAT").attr("src",iconFullyUrlDAT);



    // tree days after 
    let iconCodetda = data.daily[2].weather[0].icon;
    let iconFullyUrltda = iconBaseUrl + iconCodetda + iconFormat;
    $("#wrapper-icon-tda").attr("src",iconFullyUrltda);


    // Four days after 
    let iconCodefda = data.daily[3].weather[0].icon;
    let iconFullyUrlfda = iconBaseUrl + iconCodefda + iconFormat;
    $("#wrapper-icon-fda").attr("src",iconFullyUrlfda);


    // Icons hourly

    // Hour now
    let iconHourNow = data.hourly[0].weather[0].icon;
    let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;

    $("#wrapper-icon-hour-now").attr("src",iconFullyUrlHourNow);

    // Hour1
    let iconHour1 = data.hourly[1].weather[0].icon;
    let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
    $("#wrapper-icon-hour1").attr("src",iconFullyUrlHour1);

    // Hour2
    let iconHour2 = data.hourly[2].weather[0].icon;
    let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
    $("#wrapper-icon-hour2").attr("src",iconFullyUrlHour2);

    // Hour3
    let iconHour3 = data.hourly[3].weather[0].icon;
    let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
    $("#wrapper-icon-hour3").attr("src",iconFullyUrlHour3);

    // Hour4
    let iconHour4 = data.hourly[4].weather[0].icon;
    let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
    $("#wrapper-icon-hour4").attr("src",iconFullyUrlHour4);

    // Hour5
    let iconHour5 = data.hourly[5].weather[0].icon;
    let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
    $("#wrapper-icon-hour5").attr("src",iconFullyUrlHour5);


    // Hour6
    let iconHour6 = data.hourly[6].weather[0].icon;
    let iconFullyUrlHour6 = iconBaseUrl + iconHour6 + iconFormat;
    $("#wrapper-icon-hour6").attr("src",iconFullyUrlHour6);

    // Hour7
    let iconHour7 = data.hourly[7].weather[0].icon;
    let iconFullyUrlHour7 = iconBaseUrl + iconHour7 + iconFormat;
    $("#wrapper-icon-hour7").attr("src",iconFullyUrlHour7);

    // Hour8
    let iconHour8 = data.hourly[8].weather[0].icon;
    let iconFullyUrlHour8 = iconBaseUrl + iconHour8 + iconFormat;
    $("#wrapper-icon-hour8").attr("src",iconFullyUrlHour8);

    // Hour9
    let iconHour9 = data.hourly[9].weather[0].icon;
    let iconFullyUrlHour9= iconBaseUrl + iconHour9 + iconFormat;
    $("#wrapper-icon-hour9").attr("src",iconFullyUrlHour9);

    // Hour10
    let iconHour10 = data.hourly[10].weather[0].icon;
    let iconFullyUrlHour10 = iconBaseUrl + iconHour10 + iconFormat;
    $("#wrapper-icon-hour10").attr("src",iconFullyUrlHour10);

    // Backgrounds
    switch (main) {
      case "Snow":
        $('wrapper-bg').css('background-image', "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')");
        break;
      case "Clouds":
        $('wrapper-bg').css('background-image', "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')");
        break;
      case "Fog":
        $('wrapper-bg').css('background-image', "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')");
        break;
      case "Rain":
        $('wrapper-bg').css('background-image', "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')");
        break;
      case "Clear":
        $('wrapper-bg').css('background-image', "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')");
        break;
      case "Thunderstorm":
        $('wrapper-bg').css('background-image', "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')");
        break;
      default:
        $('wrapper-bg').css('background-image', "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')");
        break;
    }

  
  });
  }
}



