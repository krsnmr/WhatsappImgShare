const button01 = document.getElementById('waButton_01');
const button02 = document.getElementById('waButton_02');
let image_01 = document.getElementById('image_01');
let image_02 = document.getElementById('image_02');

let imageURL1 = image_01.src; // отправление ссылки на картинку
let imageURL2 = image_02.src;

// let sharehref = `whatsapp://send?text=${encodeURIComponent(imageSrc)}`;

button01.setAttribute('href', 'whatsapp://send?text=Левый поворот: ' + encodeURIComponent(imageURL1));
button02.setAttribute('href', 'whatsapp://send?text=Правый поворот: ' + encodeURIComponent(imageURL2));

//button.setAttribute('href', sharehref);
//console.log(button);

var url1 = "/turn_right.png";
var url11 = location.href.replace(window.location.pathname, url1);
document.getElementById('waButton_1').setAttribute('href', 'whatsapp://send?text=Направо: ' + encodeURIComponent(url11));
var url2 = "/turn_left.png";
var url22 = location.href.replace(window.location.pathname, url2);
document.getElementById('waButton_2').setAttribute('href', 'whatsapp://send?text=Налево: ' + encodeURIComponent(url22));

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

document.getElementById('s1').innerHTML = window.location;
document.getElementById('s2').innerHTML = url1;



function getImageURI(imagePath) {
    if (imagePath.indexOf('http') == 0) {
        return imagePath
    }
    var rootPath = window.location.protocol + "//" + window.location.host + "/";
    var path = window.location.pathname;
    if (path.indexOf("/") == 0) {
        path = path.substring(1);
    }
    path = path.split("/", 1);
    if (path != "") {
        rootPath = rootPath + path + "/";
    }
    return rootPath + imagePath;
}