// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// Per ogni oggetto nell'array images devo prendere image, title e text
// e metterli al loro posto nel DOM

// Mi richiamo dentro delle veriabili gli elementi del DOM
const imagesContainer = document.querySelector("#img-container");
console.log(imagesContainer);
const thumbnailsContainer = document.querySelector("#thumbnails-container");
console.log(thumbnailsContainer);
// Ciclo forEach per avere tutti gli elementi (oggetti) dell'array images
images.forEach((eachImage) => {
  let newImage = eachImage.image;
  let newTitle = eachImage.title;
  let newText = eachImage.text;
  // Images
  imagesContainer.innerHTML += `
    <div class="image">
        <h3 id="image-title">${newTitle}</h3>
        <p id="image-text">${newText}</p>
        <img src="${newImage}" alt="">
    </div>
    `;
  // Thumbnails
  thumbnailsContainer.innerHTML += `
    <div class="thumbnail"> 
        <img src="${newImage}" alt="">
    </div>
    `;
});

// Aggiungo la classe active alla prima immagine ed alla prima thumbnail
let activeItem = 0;
const allImages = document.querySelectorAll(".image");
allImages[activeItem].classList.add("active");
const allThumbnails = document.querySelectorAll(".thumbnail");
allThumbnails[activeItem].classList.add("active");
// Faccio funzionare le frecce
// Freccia per elemento successivo
const nextArrow = document.querySelector(".arrow.down");
nextArrow.addEventListener("click", function () {
  // Al click rimuovo la classe active all'elemento che aveva la classe active
  document.querySelector(".image.active").classList.remove("active");
  document.querySelector(".thumbnail.active").classList.remove("active");
  // Incremento activeItem di uno
  if (activeItem < allImages.length - 1) {
    activeItem++;
  } else {
    // Faccio ricominciare activeItem dal primo elemento dell'array
    activeItem = 0;
  }
  // Aggiungo classe active al nuovo activeItem
  allImages[activeItem].classList.add("active");
  allThumbnails[activeItem].classList.add("active");
});
// Freccia per elemento precedente
const previousArrow = document.querySelector(".arrow.up");
previousArrow.addEventListener("click", function () {
  // Al click rimuovo la classe active all'elemento che aveva la classe active
  document.querySelector(".image.active").classList.remove("active");
  document.querySelector(".thumbnail.active").classList.remove("active");
  // Riduco activeItem di uno
  if (activeItem > 0) {
    activeItem--;
  } else {
    // Faccio ricominciare activeItem dal fondo (ultimo elemento dell'array)
    activeItem = allImages.length - 1;
  }
  // Aggiungo classe active al nuovo activeItem
  allImages[activeItem].classList.add("active");
  allThumbnails[activeItem].classList.add("active");
});

