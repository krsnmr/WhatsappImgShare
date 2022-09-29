var button01 = document.getElementById('waButton_01');
var button02 = document.getElementById('waButton_02');
var waBtn3 = document.getElementById('waBtn3');

var image_01 = document.getElementById('image_01');
var image_02 = document.getElementById('image_02');
var ref1 = document.getElementById('ref_page_turn_left');
var ref2 = document.getElementById('ref_page_turn_right');

var imageURL1 = image_01.src; // отправление ссылки на картинку
var imageURL2 = image_02.src;
var pageTurnLeftUrl = ref1.href;
var pageTurnRightUrl = ref2.href;

var currDate = new Date();
var d = currDate.toLocaleString();

button01.setAttribute('href', 'whatsapp://send?text=Левый поворот: на ' + d + ' ' + encodeURIComponent(imageURL1));
button02.setAttribute('href', 'whatsapp://send?text=Правый поворот: на ' + d + ' ' + encodeURIComponent(imageURL2));
waBtn3.setAttribute('href', 'whatsapp://send?text=Левый поворот: на' + d + ' ' + encodeURIComponent(pageTurnLeftUrl));
waBtn4.setAttribute('href', 'whatsapp://send?text=Правый поворот: на' + d + ' ' + encodeURIComponent(pageTurnRightUrl));



var url1 = "/turn_right.png";
var url11 = location.href.replace(window.location.pathname, url1);
//document.getElementById('waButton_1').setAttribute('href', 'whatsapp://send?text=Направо: ' + encodeURIComponent(url11));
var url2 = "/turn_left.png";
var url22 = location.href.replace(window.location.pathname, url2);
//document.getElementById('waButton_2').setAttribute('href', 'whatsapp://send?text=Налево: ' + encodeURIComponent(url22));