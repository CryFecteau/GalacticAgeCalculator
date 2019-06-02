import {UserAge} from './ageCal.js';
import $ from 'jquery';

$(document).ready(function(){
    $("#inputForm").submit(function(event){
        event.preventDefault();
        let year = $("#year").val();
        let month = $("#month").val();
        let day = $("#day").val();
        let age = new UserAge(year, month, day);
        $("#results").append("<li>Your current age is " + age.earthCurrentAge() +"</li>")
        $("#results").append("<li>Your age on Mercury is " + age.mercuryCurrentAge() + "</li>");
        $("#results").append("<li>" + age.calucatedYears("Mercury") + "</li>")
        $("#results").append("<li>Your age on Venus is " + age.venusCurrentAge() + "</li>");
        $("#results").append("<li>" + age.calucatedYears("Venus") + "</li>")
        $("#results").append("<li>Your age on Mars is " + age.marsCurrentAge() + "</li>");
        $("#results").append("<li>" + age.calucatedYears("Mars") + "</li>")
        $("#results").append("<li>Your age on Jupiter is " + age.jupiterCurrentAge() + "</li>");
        $("#results").append("<li>" + age.calucatedYears("Jupiter") + "</li>")
    });
});