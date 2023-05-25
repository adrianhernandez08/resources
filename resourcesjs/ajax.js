"use strict"



$(function() {
    $.ajax("https://pokeapi.co/api/v2/pokemon/charmander").done(function (data, status, jqXhr) {
        alert("AJAX call completed successfully!");
        console.log("Request status: " + status);
        console.log("Data returned from server:");
        console.log(data);
    })
    .fail(function(jqXhr, status, error) {
        alert("There was an error! Check the console for details");
        console.log("Response status: " + status);
        console.log("Error object: " + error);
});
})