$("#run-search").on("click", function(){
event.preventDefault()
var key= "BeJaPfj7Cq5iLNLXhd1HBy0i99myj75b";
var search = $("#search-term").val();
var startYear = $("#start-year").val();

console.log(startYear);
var endYear = $('#end-year').val();

var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${startYear}&end_date=${endYear}&q=${search}&api-key=${key}`
// var key= '&api-key=f69a18d9-a454-4495-9d23-f5012fb7b6b1';

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    var results = response; 
    $(results.response.docs).each(function(index){
    var abstract  = response.response.docs[index].abstract;
    // console.log(abstract);
    var byline = response.response.docs[index].byline.original;
    $("results").text(results);
    $("abstract").text(abstract);
    $("byline").text(byline);
    // console.log(byline);
    $("#article-section").append(abstract);
    $("#article-section").append("<br>",byline,"<br>");
    })
  })
})