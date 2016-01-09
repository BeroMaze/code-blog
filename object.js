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

Blog.prototype.toHtml = function(){
  var date = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago';
  $('article').append('<div class= "store"><h2 class = "arTilte"><u>' + this.title + '</u></h2><p class = "disc"> By: ' + this.author + ' Published ' + date + '</p><p class= "details">Category: ' + this.category + '</p><p class= "details">Link: ' + this.authorUrl + '</p> <div class="body"><p>' + this.body + '</p></div></div>');
};

storeArray.forEach(function(x){
  x.toHtml();
});

var pushCategory = function(){
  var unique = [];

  var array = storeArray.map(function(x){
    return x.category;
  });

  $.each(array, function(i, el){
    if($.inArray(el, unique) === -1) unique.push(el);
  });

  unique.forEach(function(i){
    $('#category').append('<li class="searches">' + i + '</li>');
  });
};
pushCategory();

var pushAuthor = function(){
  var unique = [];

  var array = storeArray.map(function(x){
    return x.author;
  });

  $.each(array, function(i, el){
    if($.inArray(el, unique) === -1) unique.push(el);
  });

  unique.forEach(function(i){
    $('#author').append('<li class="searches">' + i + '</li>');
  });
};
pushAuthor();

var pushPublished = function(){
  var unique = [];

  var array = storeArray.map(function(x){
    return x.publishedOn;
  });

  $.each(array, function(i, el){
    if($.inArray(el, unique) === -1) unique.push(el);
  });

  unique.forEach(function(i){
    $('#publishedOn').append('<li class="searches">' + i + '</li>');
  });
};
pushPublished();

var pushTitles= function(){
  var unique = [];

  var array = storeArray.map(function(x){
    return x.title;
  });

  $.each(array, function(i, el){
    if($.inArray(el, unique) === -1) unique.push(el);
  });

  unique.forEach(function(i){
    $('#titles').append('<li class="searches">' + i + '</li>');
  });
};
pushTitles();


$('.searches').on('click', function(){
  var pick = $(this).text();
  var newArray = [];
  storeArray.forEach(function(i){
    if (i.category === pick) {
      console.log(i);
      newArray.push(i);
    }
    else if(i.title === pick) {
      console.log(i);
      newArray.push(i);
    }
    else if(i.author === pick) {
      console.log(i);
      newArray.push(i);
    }
    else if(i.publishedOn === pick) {
      console.log(i);
      newArray.push(i);
    }
  });
  $('article').html('');
  newArray.forEach(function(x){
    x.toHtml();
  });
  window.scrollTo(0, 0);
  fullView();
});

$('#clear').on('click', function(event) {
  $('article').html('');
  storeArray.forEach(function(x){
    x.toHtml();
  });
  window.scrollTo(0, 0);
  fullView();
});

function openTab(url){
  window.open(url, '_blank');
}
function openSelf(url){
  window.open(url, '_self');
}

var fullView = function(){
  $('.store').on('click', function(event) {
    $(this).toggleClass('full');
  });
};
fullView();

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
