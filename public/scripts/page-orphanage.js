// opções

const options = {
  dragging: false, // zoom ao arrastar
  touchZoom: false, // zoom ao tocar
  doubleClickZoom: false, // zoom ao dar double click
  scrollWheelZoom: false, // zoom com o scroll do mouse
  zoomControl: false // o controle de zoom no mapa
}


// create map

const map = L.map('mapid', options).setView([-27.2058128, -49.6932564], 15);
/* Mudamos para 'const' ao invés de 'var' por estarmos utilizando o js moderno /* significa que este mapa 
vai ser um mapa do começo ao fim da nossa aplicação */
// O 'L' é referente ao objeto que o Leaflet criou na nossa aplicação 
// O primeiro valor do array é a latitude e o segundo a longitude, e o '13' é o zoom no mapa 


// create and add tileLayer

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoicGJhcnNvdSIsImEiOiJja2s3OWdiNm4wYm1hMnVwMmtkZTJheWJvIn0.XC_dunTdZkP2ATiCqlyMDQ'
}).addTo(map);
// 'tileLayer' é a camada que vai receber o nosso mapa 


// create icon (icon do marcador)

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68], // tamanho do icon 
  iconAnchor: [29, 68], // onde ele estará ancorado 
  popupAnchor: [170, 2] /* o popup é basicamente a box que aparece ao clicar no marcador, estamos setando 
  a sua posição ao lado do marcador */
})


/* tiramos o popup já que o mapa do 'page-orphanages' é menor e assim fica mais organizado (lembrando que
o popup) é o marker com uma caixa de texto do lado */


// create and add marker

L.marker([-27.20, -49.69], { icon }).addTo(map); // inserção do marker
// tiramos também o '.bindPopup(popup)', que era o rsponsável por fazer a inserção do popup


/* image gallery */

function selectImage(event) {

  const button = event.currentTarget /* 'event.currentTarget', ou seja, alvo atual, diz que quem está 
  disparando o evento é o botão */


  // remover todas as classes '.active'

  const buttons = document.querySelectorAll(".images button"); /* 'querySelectorAll' significa: consulte 
  dos os seletores /* então estamos consultando todos os buttons presentes na classe 'images'*/ 

  buttons.forEach((button) => { /* 'forEach' sigifica: para cada /* então, para cada botão: */
    button.classList.remove("active"); /* todo botão tem uma 'classList', e dentro dela podemos remover o
    'active' /* lembrando que esse 'button' não é o mesmo do criado acima, ele refere-se a 1 botão dos 6
    botões que o 'querySelectorAll' consultou, já que estamos fazendo um 'forEach', ou seja, 'para cada' */ 
  })


  // selecionar a imagem clicada
  const img = button.children[0]; /* se dermos um 'console.log(button.children)' veremos que ele só tem 
  1 filho, e este filho é uma imagem na posição 0 */
  const imgContainer = document.querySelector(".orphanage-details > img");


  // atualizar container de imagem
  imgContainer.src = img.src;


  // adicionar classe '.active' ao botão selecionado
  button.classList.add("active");
  
}