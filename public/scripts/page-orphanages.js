// create map

const map = L.map('mapid').setView([-27.2058128, -49.6932564], 15);
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

// create popup overlay (criação do popup)

const popup = L.popup({
  closeButton: false,
  className: 'map-popup', 
  minWidth: 240, // largura mínima 
  minHeight: 240 // altura mínima 
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>');
// conteúdo do popup e botão que leva para a página do orfanato referente ao marcador 


// create and add marker

L.marker([-27.20, -49.69], { icon }).addTo(map) // inserção do marker
.bindPopup(popup); // inserção do popup
