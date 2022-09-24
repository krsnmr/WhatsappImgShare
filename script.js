const button = document.getElementById('waButton');
let image = document.getElementById('image');
let imageURL = image.src;

// let sharehref = `whatsapp://send?text=${encodeURIComponent(imageSrc)}`;

button.setAttribute('href', 'whatsapp://send?text=' + encodeURIComponent(imageURL));

//button.setAttribute('href', sharehref);
//console.log(button);