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

const isUserExist = (id) => USERS.find((user) => user.id === id);

const sendEmail = (email, message) => {
  console.log(`Message '${message}' sent to '${email}'`);
};

const sendMessages = (users, message) => {
  for (const user of users) {
    sendEmail(user.email, message);
  }
};

wss.on("connection", (ws, req) => {
  console.log("Connected");
  let owner_id;

  /**
   * Expect:
   * 1. Error if no ID in data field or local variable 'id'
   * 2. If ID exist in data field and 'id' is empty
   * 3. Send messages
   * 
   * data: {
   *  users?: {id: string, email: string...},
   *  message?: string,
   *  owner_id?: string
   * }
   */
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    if (!owner_id && !isUserExist(data.owner_id)) {
      console.log("ERROR: no owner_id");
      return;
    } else if (isUserExist(data.owner_id) && !owner_id) {
      owner_id = data.owner_id;
      ws.send(JSON.stringify({ users: USERS }));
      return;
    }

    sendMessages(data.users, data.message);
  });
});
