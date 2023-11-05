import { WebSocketServer } from "ws";

import { sendToEmail } from "./src/services/google/gmail.mjs";

const wss = new WebSocketServer({ port: 3001 });

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

const sendMessage = (senderUserId, receiverUserId, message) => {
  const senderEmail = USERS.find((user) => user.id === senderUserId)?.email;
  const receiverEmail = USERS.find((user) => user.id === receiverUserId)?.email;
  sendToEmail(senderEmail, receiverEmail, message);
};

wss.on("connection", (ws, req) => {
  console.log("Connected");
  ws.send(JSON.stringify(USERS));

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    console.log({ data });
    sendMessage(data.sender?.id, data.receiver_id, data.message);
  });
});
