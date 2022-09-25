const button = document.getElementById('waButton');
let image = document.getElementById('image');
let imageURL = image.src; // отправление ссылки на картинку

// let sharehref = `whatsapp://send?text=${encodeURIComponent(imageSrc)}`;

button.setAttribute('href', 'whatsapp://send?text=Обезьяна: ' + encodeURIComponent(imageURL));

//button.setAttribute('href', sharehref);
//console.log(button);

var url1 = "img/turn_right.png";
document.getElementById('waButton_1').setAttribute('href', 'whatsapp://send?text=Направо: ' + encodeURIComponent(url1));
var url2 = "img/turn_left.png";
document.getElementById('waButton_2').setAttribute('href', 'whatsapp://send?text=Налево: ' + encodeURIComponent(url2));