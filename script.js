

//---- Identify function and declare variable with let.... appID, weather, city, date, search history
//---- Ensure it is stored locally

$(document).ready(function () {
    let appID = "816a6ba18e5f3b77cc12c8f07244ee1f";
    let weather = "";
    let city = "";
    let current_date = moment().format("L");
    let search_history = JSON.parse(localStorage.getItem("cities")) === null ? [] : JSON.parse(localStorage.getItem("cities"));

    console.log(search_history);
    console.log(current_date);

    displaySearchHistory();

//---- Create function to display the current weather based upon search
//---- ensure the search is pulling up a city from api index
//----  https://api.openweathermap.org/data/2.5/weather?q=

    function currentWeather() {

                                                    

//-------------------- 5 Day forecast

//----- Include functionality to populate the forecast
//----- Build frame for each day (date and time)
//----- Similar to the current weather build variables with let
//----- https://api.openweathermap.org/data/2.5/forecast?q=







//----- Search History for cities that you'ved looked up

    function displaySearchHistory() {

        $("#search-history").empty();
        search_history.forEach(function (city) {

            //check to see if an entry is already part of search history, and don't add a second version of it
            console.log(search_history);
            let history_item = $("<li>");

            history_item.addClass("list-group-item btn btn-light");
            history_item.text(city);

            $("#search-history").prepend(history_item);
        });
        $(".btn").click(currentWeather);
        $(".btn").click(fiveDayForecast);


//----- clear search history

    }
    function clearHistory() {
        $("#search-history").empty();
        search_history = [];
        localStorage.setItem("cities", JSON.stringify(search_history));
    }
    //put the listener on btn class so that all buttons have listener

    $("#clear-history").click(clearHistory);
    $("#submit-city").click(displaySearchHistory);

});