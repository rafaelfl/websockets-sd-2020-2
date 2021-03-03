// importa a biblioteca ws
const WebSocket = require("ws");

// cria o objeto do servidor WebSocket
const server = new WebSocket.Server({ port: 8080 });

// evento que ocorre quando um cliente se conectar neste servidor
server.on("connection", (socket) => {
    // imprime uma mensagem quando um cliente conectar
    console.log("Cliente conectado!");
    
    socket.on("message", (message) => {
        // código que o servidor vai executar quando receber uma mensagem

        console.log("Mensagem recebida: " + message);
        
        // envia de volta para o cliente uma mensagem contendo a própria
        // mensagem recebida.
        socket.send("Obrigado por enviar a mensagem: " + message);
        socket.send("mensagem 2");
    });
});

console.log("Servidor up and running!");