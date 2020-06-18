var queryURL= 'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date='+ startY+  '&end_date=' + endY+ '&q=' + search + key ;
var key= '&api-key=f69a18d9-a454-4495-9d23-f5012fb7b6b1';


var search = $('#search-term"')


var startYear = $('#start-year')
 var startY = startYear.val()
startYear.trim()
var endYear = $('end-year')
var endY = endYear.val()
endYear.trim()

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    