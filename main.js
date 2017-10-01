// api key 3d6919a94e3e99643aaed12a43c4cb86

$(function() {

    var C = false;
    var apiData;

    backgroundIMG = [
        "https://23711-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg",
        "https://ak3.picdn.net/shutterstock/videos/2302283/thumb/1.jpg?i10c=img.resize(height:160)",
        "http://media.moddb.com/images/downloads/1/120/119783/rain-04.jpg",
        "https://previews.123rf.com/images/adam1975/adam19751010/adam1975101000003/8143605-View-of-bench-and-trees-through-snowing-Blue-tone--Stock-Photo-snowing-snow.jpg",
        "https://www.howitworksdaily.com/wp-content/uploads/2014/08/fog-06.jpg",
        "http://hdwallpaperfx.com/wp-content/uploads/2016/09/Clear-Sky-Sunset-Fog-Over-Mountains-Wallpaper.jpg",
        "https://static.pexels.com/photos/1818/sky-clouds-cloudy-forest.jpg"
    ]

    function showTemp(Fheit,Celsius) {
        if(Celsius) return Math.round((Fheit-32)*(5/9)) + "&deg; C";
        return Math.round(Fheit) + "&deg; F";
    }

    // function render


})