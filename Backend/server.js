import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function connection(ws) {
  ws.send(JSON.stringify([
    { id: "Dev", name: "Developers" },
    { id: "Ceo", name: "CEO" },
  ]))
  ws.on("message", function message(message) {
    const data = JSON.parse(message);
    if (data.type === "message") {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "message", data: data.data }));
        }
      });
    }
  });
});
