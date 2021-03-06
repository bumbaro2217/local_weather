// api key appid=3d6919a94e3e99643aaed12a43c4cb86

$(function() {

    var C = false;
    var apiData;
    var appid = "3d6919a94e3e99643aaed12a43c4cb86";

    backgroundIMG = [
        "https://23711-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg",
        "https://ak3.picdn.net/shutterstock/videos/2302283/thumb/1.jpg?i10c=img.resize(height:160)",
        "http://media.moddb.com/images/downloads/1/120/119783/rain-04.jpg",
        "https://previews.123rf.com/images/adam1975/adam19751010/adam1975101000003/8143605-View-of-bench-and-trees-through-snowing-Blue-tone--Stock-Photo-snowing-snow.jpg",
        "https://www.howitworksdaily.com/wp-content/uploads/2014/08/fog-06.jpg",
        "http://hdwallpaperfx.com/wp-content/uploads/2016/09/Clear-Sky-Sunset-Fog-Over-Mountains-Wallpaper.jpg",
        "https://static.pexels.com/photos/1818/sky-clouds-cloudy-forest.jpg"
    ]

    function showTemp(F,C) {
        if(C) return Math.round((F-32)*(5/9)) + "&deg; C";
        return Math.round(F) + "&deg; F";
    }

    function render(data,C){
        var currentWeather = data.weather[0].description
        var currentTemp = showTemp(data.main.temp,C);
        var icon = data.weather[0].icon;

        $("#currentTemp").html(currentTemp);
        $("#currentWeather").html(currentWeather);

        var weatherIcon = "https://openweathermap.org/img/w/" + icon + ".png";
        $("#currentTemp").prepend("<img src=" + weatherIcon + ">");
    }

    $.getJSON("https://freegeoip.net/json/").done(function(location) {
        // console.log(location);
        $("#country").html(location.country_name);
        $("#city").html(location.city);
        $("#latitude").html(location.latitude);
        $("#longitude").html(location.longitude);


        $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+location.latitude+
        "&lon="+location.longitude+"&units=imperial&appid="+appid, function(data) {
            apiData = data;
            //console.log(apiData); WORKING!

            render(apiData,C);

            $("#toggle").click(function() {
                C = !C;
                render(data,C);
            })

            var id = data.weather[0].id,
                    bgIndex,
                    backgroundId = [299,499,599,699,799,800];
            backgroundId.push(id);
            bgIndex = backgroundId.sort().indexOf(id);

            $("body").css("background-image", "url(" + backgroundIMG[bgIndex] + ")");

        })
    
    })

});