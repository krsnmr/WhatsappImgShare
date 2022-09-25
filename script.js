const button = document.getElementById('waButton');
let image = document.getElementById('image');
let imageURL = image.src; // отправление ссылки на картинку

// let sharehref = `whatsapp://send?text=${encodeURIComponent(imageSrc)}`;

button.setAttribute('href', 'whatsapp://send?text=Обезьяна: ' + encodeURIComponent(imageURL));

//button.setAttribute('href', sharehref);
//console.log(button);

var url1 = "/img/turn_right.png";
var url11 = location.href.replace(window.location.pathname, url1);
document.getElementById('waButton_1').setAttribute('href', 'whatsapp://send?text=Направо: ' + encodeURIComponent(url11));
var url2 = "/img/turn_left.png";
var url22 = location.href.replace(window.location.pathname, url2);
document.getElementById('waButton_2').setAttribute('href', 'whatsapp://send?text=Налево: ' + encodeURIComponent(url22));


//window.location.pathname+window.location.search

//console.log('window.location.pathname', window.location.pathname);
//console.log('location.href.replace', location.href.replace(window.location.pathname, url1));

//location.href.replace();