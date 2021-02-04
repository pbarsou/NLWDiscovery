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
})


// create variable 'marker'

let marker; // 'let' e não 'const' para podermos alterar a variável durante a aplicação


// create and add marker

map.on('click', (event) => { // mapa está ouvindo (o click) // 'event' recebe o evento

  /* console.log(event); /* aqui podemos ver que o evento nos retorna um objeto 'latlgn', que contém
  a latitude e longitude do local no mapa foi realizado o click */
  const lat = event.latlng.lat; 
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat; /* atribui o valor de 'lat' para o 'input' 'lat' que 
  criamos no html */
  document.querySelector('[name=lng]').value = lng; /* atribui o valor de 'lng' para o 'input' 'lng' que 
  criamos no html */


  // remove icon (para ao clicar uma segunda vez no mapa, o marker anterior ser apagado)

  marker && map.removeLayer(marker); // 'marker &&' significa que se caso marker existir...remova


  // add icon layer

  marker = L.marker([lat, lng], { icon }).addTo(map);

}); 

// adicionar campo de fotos

function addPhotoField() { 

  // pegar o container de fotos '#images' (id 'images)

  const container = document.querySelector('#images'); // container maior, que abrange todos os outros

  // pegar o container para duplicar '.new-upload' (class 'new-upload')

  const fieldsContainer = document.querySelectorAll('.new-upload'); /* recebe todos os fields 
  posteriormente criados e o inicial */

  // realizar clone da última imagem adicionada

  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true); /* pegando 
  última imagem adicionada e clonando ('true' sendo passado para clonar o container por completo */

  // lógica de não permitir adicionar o campo se o anterior estiver vazio

  const input = newFieldContainer.children[0]; /* 'newFieldContainer' tem como filhos o 'input' e 
  o 'span', se dermos 'console.log' conseguimos ver, dessa forma, iremos deixar o 'input' (que fica na 
  posição 0) vazio */

  if (input.value == "") {
    return; // return impede que o código continue
  }

  // limpar o campo antes de adicionar ao container de imagens

  input.value = ""; // estamos deixando o valor do 'input' vazio 
  
  // adicionar o clone ao container de imagens

  container.appendChild(newFieldContainer);
}

// deletar campo de fotos

function deleteField(event) {
  const span = event.currentTarget; // pega quem foi que disparou o evento

  const fieldsContainer = document.querySelectorAll('.new-upload'); /* recebe todos os fields 
  posteriormente criados e o inicial */

  if(fieldsContainer.length <= 1) {

    // limpar container
    span.parentNode.children[0].value = ""; /* 'parentNode' é o pai do 'span', ou seja, o '.new-upload'
    e estamos entrando no seu filho da posição '0' ('input') e o colocando como vazio */
    return;
  }

  // delete o campo
  span.parentNode.remove(); // 'parentNode' é o pai do 'span', ou seja, o '.new-upload' 
}

// select yes or no

function toggleSelect(event) {

  const button = event.currentTarget; // pegando o botão que disparou o evento

  const buttons = document.querySelectorAll('.button-select button'); /* estamos consultando todos os 
  buttons presentes na classe 'button-select' */

  // retirar a class '.active' dos botões

  buttons.forEach((button) => // para cada
    button.classList.remove('active')
  )

  // adicionar class '.active' ao botão clicado
  button.classList.add('active');

  // atualizar valor do 'input' 'hidden' com o valor booleano da opção selecionada

  document.querySelector('[name="open_on_weekends"]').value = button.dataset.value; /* seta o novo valor 
  no 'input' de nome 'open_on_weekends' que criamos no html */
  console.log(document.querySelector('[name="open_on_weekends"]').value);

}