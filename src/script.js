var button01 = document.getElementById('waButton_01');
var button02 = document.getElementById('waButton_02');
var waBtn3 = document.getElementById('waBtn3');

var image_01 = document.getElementById('image_01');
var image_02 = document.getElementById('image_02');


var imageURL1 = image_01.src; // отправление ссылки на картинку
var imageURL2 = image_02.src;

var urlPageTurnLeft = location.href.replace(location.pathname, '') + "/pages/page_turn_left.html";
console.log('location.href', location.href);
console.log('location.pathname', location.pathname);
console.log('location.href.replace', location.href.replace(location.pathname, ''));

console.log('urlPageTurnLeft', urlPageTurnLeft);

// let sharehref = `whatsapp://send?text=${encodeURIComponent(imageSrc)}`;

button01.setAttribute('href', 'whatsapp://send?text=Левый поворот: ' + encodeURIComponent(imageURL1));
button02.setAttribute('href', 'whatsapp://send?text=Правый поворот: ' + encodeURIComponent(imageURL2));
waBtn3.setAttribute('href', 'whatsapp://send?text=Левый поворот: ' + encodeURIComponent(urlPageTurnLeft));

//button.setAttribute('href', sharehref);
//console.log(button);

var url1 = "/turn_right.png";
var url11 = location.href.replace(window.location.pathname, url1);
//document.getElementById('waButton_1').setAttribute('href', 'whatsapp://send?text=Направо: ' + encodeURIComponent(url11));
var url2 = "/turn_left.png";
var url22 = location.href.replace(window.location.pathname, url2);
//document.getElementById('waButton_2').setAttribute('href', 'whatsapp://send?text=Налево: ' + encodeURIComponent(url22));