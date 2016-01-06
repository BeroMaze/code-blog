var Blog = function (title, category, author, authorUrl, publishedOn, body) {
  this.title = title;
  this.category = category;
  this.author = author;
  this.authorUrl = authorUrl;
  this.publishedOn = publishedOn;
  this.body = body;
  storeArray.push(this);
};

var storeArray = [];
var count = 1;
var index = 0;

rawData.map(function(count, index){
  count = new Blog(rawData[index].title, rawData[index].category, rawData[index].author, rawData[index].authorUrl, rawData[index].publishedOn, rawData[index].body);
  count +=1;
  index +=1;
});
console.log(storeArray);

Blog.prototype.toHtml = function(){
  $('article').append('<div class= "store"><h2 class = "arTilte"><u>' + this.title + '</u></h2><p class = "disc"> By: ' + this.author + ' published ' + this.publishedOn + '</p><p class= "details">Category: ' + this.category + '</p><p class= "details">Link: ' + this.authorUrl + '</p> <div class="body"><p>' + this.body + '</p></div></div>');
};


storeArray.forEach(function(x){
  x.toHtml();
});

function openTab(url){
  window.open(url, '_blank');
}
function openSelf(url){
  window.open(url, '_self');
}

$('.store').on('click', function(event) {
  $(this).toggleClass('full');
});

$('#home').on('click', function(event) {
  openSelf('./index.html');
});
$('#about').on('click', function(event) {

});
$('#twitter').on('click', function(event) {
  openTab('https://www.twitter.com/beromaze');
});
$('#github').on('click', function(event) {
  openTab('https://github.com/BeroMaze');
});


// $window = $(window);
//
// $(document).ready(function(){
//   $window.resize(function() {
//     var screen = $window.width();
//     while(screen < 900){
//       $('h1').css('font-size', '2em');
//       break;
//     }
//     while(screen > 900){
//       $('h1').css('font-size', '3em');
//       break;
//     }
//   });
// });
