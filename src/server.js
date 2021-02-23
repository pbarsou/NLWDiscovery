// importando dependência
const express = require('express'); // 'require('express')' retorna uma função
const path = require('path'); /* auxilia de forma correta na navegação de diretório, visto que o 
caminho no windows é lido com '\' e no mac e linux '/' */

// iniciando o express
const server = express() // variável responsável pelo nosso servidor

server.use(express.static('public')); /* 'express.static' cria todas as rotas necessárias para a pasta 
de arquivos estáticos passada por parâmetro, já que sem elas não conseguimos acessar os itens da pág */
/* Dessa forma, precisamos tirar o '.public/' que vinha antes de cada importação nos nossos arquivos 
'.html', pois estavamos informando o caminho local até eles */

// criação de rota
server.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, "views", "index.html")); /* '.sendFile' retorna um arquivo 
  /* '__dirname' mostra a pasta atual em que você se encontra /* o que queremos fazer é passar o caminho 
  exato até a nossa página inicial */
})

// ligando o servidor
server.listen(5500);