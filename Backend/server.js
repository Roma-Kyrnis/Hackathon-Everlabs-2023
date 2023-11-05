import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function connection(ws) {
  ws.send(JSON.stringify([
    {
      "id": "Vasya",
      "email": "vasya@gmail.com",
      "username": "Vasya1"
    },
    {
      "id": "Petro",
      "email": "petro@gmail.com",
      "username": "Petro1"
    },
    {
      "id": "Olezha",
      "email": "olezha@gmail.com",
      "username": "Olezha1"
    }
  ]))
  
  ws.on("message", function message(message) {
    const data = JSON.parse(message);
    console.log(message, data);
    if (data.type === "message") {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          console.log(data.message);
          client.send(JSON.stringify({ type: "message", message: data.message, sender: data.sender.id }));
        }
      });
    }
  });
});
