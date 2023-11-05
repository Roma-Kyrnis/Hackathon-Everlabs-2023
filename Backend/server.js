import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

const USERS = [
  {
    id: "Vasya",
    email: "vasya@gmail.com",
    username: "Vasya",
  },
  {
    id: "Petro",
    email: "petro@gmail.com",
    username: "Petro",
  },
  {
    id: "Olezha",
    email: "olezha@gmail.com",
    username: "Olezha",
  },
];

const sendToEmail = (senderEmail, receiverEmail, message) => {
  console.log(`Message '${message}' sent to '${senderEmail}' from '${receiverEmail}'`);
};

const sendMessage = (senderUserId, receiverUserId, message) => {
  const senderEmail = USERS.find((user) => user.id === senderUserId).email;
  const receiverEmail = USERS.find((user) => user.id === receiverUserId).email;
  sendToEmail(senderEmail, receiverEmail, message);
};

wss.on("connection", (ws, req) => {
  console.log("Connected");
  ws.send(JSON.stringify({ users: USERS }));

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    sendMessage(data.sender?.id, data.receiver_id, data.message);
  });
});
