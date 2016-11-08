$(document).ready(function() {
  $.simpleWeather({
    location: 'Dhaka, BD',
    unit: 'c',
    success: function(weather) {
      var time = new Date();
      var d = time.getDate();
      var m = time.getMonth();
      var y = time.getFullYear();
      var day = time.getDay();

      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      if (day == 0) {
        dd = days[0];
      } else if (day == 1) {
        dd = days[1];
      } else if (day == 2) {
        dd = days[2];
      } else if (day == 3) {
        dd = days[3];
      } else if (day == 4) {
        dd = days[4];
      } else if (day == 5) {
        dd = days[5];
      } else {
        dd == days[6];
      }
      if (m == 1) {
        mm = months[0];
      } else if (m == 2) {
        mm = months[1];
      } else if (m == 3) {
        mm = months[2];
      } else if (m == 4) {
        mm = months[3];
      } else if (m == 5) {
        mm = months[4];
      } else if (m == 6) {
        mm = months[5];
      } else if (m == 7) {
        mm = months[6];
      } else if (m == 8) {
        mm = months[7];
      } else if (m == 9) {
        mm = months[8];
      } else if (m == 10) {
        mm = months[9];
      } else if (m == 11) {
        mm = months[10];
      } else {
        mm == months[11];
      }
      if (weather.code == 1 || weather.code == 2 ) {
        html = '<div class="heading"><i class="icofont icofont-hurricane"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 3 || weather.code == 4) {
        html = '<div class="heading"><i class="icofont icofont-rainy-thunder"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 5 || weather.code == 6) {
        html = '<div class="heading"><i class="icofont icofont-rainy-sunny"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 7) {
        html = '<div class="heading"><i class="icofont icofont-snowy-rainy"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 8 || weather.code == 9 || weather.code == 10 || weather.code == 11 || weather.code == 12) {
        html = '<div class="heading"><i class="icofont icofont-rainy"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 14 || weather.code == 15) {
        html = '<div class="heading"><i class="icofont icofont-snowy"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 16) {
        html = '<div class="heading"><i class="icofont icofont-snow"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 17) {
        html = '<div class="heading"><i class="icofont icofont-hail"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 19 || weather.code == 21 || weather.code == 22 || weather.code == 23) {
        html = '<div class="heading"><i class="icofont icofont-dust"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 20 || weather.code == 25) {
        html = '<div class="heading"><i class="icofont icofont-clouds"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 24) {
        html = '<div class="heading"><i class="icofont icofont-wind"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 26 || weather.code == 27 || weather.code == 28 || weather.code == 29 || weather.code == 30 || weather.code == 44) {
        html = '<div class="heading"><i class="icofont icofont-cloudy"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 31) {
        html = '<div class="heading"><i class="icofont icofont-sun-alt"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 32 || weather.code == 34) {
        html = '<div class="heading"><i class="icofont icofont-sunny"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 33) {
        html = '<div class="heading"><i class="icofont icofont-night"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 35) {
        html = '<div class="heading"><i class="icofont icofont-hail-rainy"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 36) {
        html = '<div class="heading"><i class="icofont icofont-sunny-day-temp"></i> '+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 37 || weather.code == 38 || weather.code == 39 || weather.code == 40) {
        html = '<div class="heading"><i class="icofont icofont-thinder-light"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 41 || weather.code == 42 || weather.code == 43) {
        html = '<div class="heading"><i class="icofont icofont-snowy-sunny"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }else if (weather.code == 45 || weather.code == 46 || weather.code == 47) {
        html = '<div class="heading"><i class="icofont icofont-rainy-thunder"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      } else {
        html = '<div class="heading"><i class="icofont icofont-rainy-thunder"></i>'+'<span class="deg">'+weather.temp+'&deg;'+'</span>'+'<span class="temp">'+weather.units.temp+'</span>';
      }
      html += '<div class="currently">'+weather.currently+'</div>';
      html += '<ul class="weather-info"><li><i class="icofont icofont-ui-calendar"></i>'+dd+" ,"+d+' '+mm+' '+y+'</li>';
      html += '<li><i class="icofont icofont-location-arrow"></i>'+weather.city+', '+weather.country+'</li>';
      html += '<li><li><i class="icofont icofont-hail-rainy"></i>'+'Humidity: '+weather.humidity+'%'+'</li>';
      html += '<li><li><i class="icofont icofont-wave"></i>'+'Pressure: '+weather.pressure+'</li></ul>';
      
      html += '</div>';
      
      html += '<div class="forcast"><ul>';
        html += '<li><h4>sun</h4><i class="icofont icofont-rainy-thunder"></i><h4>26<span class="deg">o</span>C</h4></li>';
        html += '<li><h4>sun</h4><i class="icofont icofont-hail-rainy"></i><h4>21<span class="deg">o</span>C</h4></li>';
        html += '<li><h4>sun</h4><i class="icofont icofont-full-sunny"></i><h4>20<span class="deg">o</span>C</h4></li>';
        html += '<li><h4>sun</h4><i class="icofont icofont-sun-rise"></i><h4>30<span class="deg">o</span>C</h4></li>';
        html += '<li><h4>sun</h4><i class="icofont icofont-rainy-thunder"></i><h4>38<span class="deg">o</span>C</h4></li>';
        html += '<li><h4>sun</h4><i class="icofont icofont-sun-set"></i></i><h4>26<span class="deg">o</span>C</h4></li>';
      html += '</ul></div>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

});

