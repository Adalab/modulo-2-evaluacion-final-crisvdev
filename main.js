'use strict'

//const searchNames =document.querySelector (".js_name");
//const Btn = document.querySelector (".js_search");
let favs = document.querySelector (".js_favsCards");
let charactersList =document.querySelector(".js_characters_list")
const URL = `https://api.disneyapi.dev/character?pageSize=50`;

let list =[]
let favList = []

let card = document.querySelector(".cardLi");

let favStorage = JSON.parse(localStorage.getItem
('favorites'));

function loadList() {
  fetch (URL)
.then ((response) => response.json())
.then((data) => {
    console.log(data)
    list = data.data;
    renderList(list);
  
    });
}
    loadList();
console.log (list)

function handleClick(event) {
  const id = event.target.closest("li").id;
  const isFavorite = favStorage.includes(id);
  console.log(isFavorite)
  //const selectedPalette = charactersList.find((item) => id === id);
  //const indexPalette = charactersList.findIndex((item) => id === id);
  if (isFavorite === false) {
    favStorage.push(id) && charactersList.classList.add ('yellow');

    
  } else {
    const index = favStorage.indexOf(id);
    favStorage.splice(index, 1) && charactersList.classList.remove ('yellow');
  
  }
  console.log(favStorage);
  localStorage.setItem('favorites', JSON.stringify(favStorage));
  loadList();
}

function renderList(list){
  charactersList.innerHTML=``;
  favs.innerHTML=``;
  list.forEach(element => {
    
    charactersList.innerHTML+= `<li id="card${element._id}" class="cardLi card"> <p> ${element.name}</p> <img class="photo" src=" ${element.imageUrl}"/></li> `;
    if ( favStorage.includes('card'+ element._id)){
      
      favs.innerHTML += `<li id="card${element._id}" class="cardLi card"> <p> ${element.name}</p> <img class="photo" src=" ${element.imageUrl}"/></li> `;
    }
})};



    console.log(card)
     charactersList.addEventListener('click' ,handleClick); 

