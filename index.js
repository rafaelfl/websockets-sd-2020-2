// código necessário para o deploy e execução no Heroku
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const express = require("express");

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Servidor up and running na porta ${PORT}!`));


// importa a biblioteca ws
const WebSocket = require("ws");

// cria o objeto do servidor WebSocket
const wss = new WebSocket.Server({ server });

// evento que ocorre quando um cliente se conectar neste servidor
wss.on("connection", (socket) => {
    // imprime uma mensagem quando um cliente conectar
    console.log("Cliente conectado!");
    
    socket.on("message", (message) => {
        // código que o servidor vai executar quando receber uma mensagem

        console.log("Mensagem recebida: " + message);

        // envia a mensagem para todos os clientes conectados
        wss.clients.forEach((client) => {
            client.send(message);
        });
    });
});

