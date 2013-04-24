$(document).ready(function() {

var randomNum = Math.ceil(Math.random()*1000);
$("head").find("link").attr("href", function (i, value) {
   return value +"?v="+randomNum;
});
$("head").find("script").attr("src", function (i, value) {
   return value +"?v="+randomNum;
});
});
