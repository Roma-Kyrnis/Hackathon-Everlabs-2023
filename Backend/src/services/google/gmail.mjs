import { google } from "googleapis";
import nodemailer from "nodemailer";

import { config } from "../../config.mjs";

// const oauth2Client = new google.auth.OAuth2(
//   config.GoogleCreds.savedCredentials.client_id,
//   config.GoogleCreds.savedCredentials.client_secret,
//   config.GoogleCreds.REDIRECT_URL
// );

// TODO: For future use to update tokens in token.json file
// const url = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: "offline",
//   scope: config.GoogleCreds.SCOPES,
// });

// oauth2Client.on("tokens", (tokens) => {
//   if (tokens.refresh_token) {
//     // store the refresh_token in my database!
//     console.log(tokens.refresh_token);
//   }
//   console.log(tokens.access_token);
// });

// const url = oauth2Client.generateAuthUrl({
//   access_type: "offline",
//   prompt: "consent",
//   scope: config.GoogleCreds.SCOPES,
// });

// console.log('Authorize this app by visiting this url:', url);

// oauth2Client.getToken('code').then(({ tokens }) => {
//   const tokenPath = path.join(__dirname, "token.json");
//   fs.writeFileSync(tokenPath, JSON.stringify(tokens));
//   console.log("Access token and refresh token stored to token.json");
// });

// const auth = google.auth.fromJSON(config.GoogleCreds.savedCredentials);

// /**
//  *
//  * @param {string} Receiver email.
//  * @param {string} message to user
//  * @param {string} title with default value
//  */
// export const sendToEmail = async (
//   email,
//   message,
//   title = "Check your new messages in the Trainual!"
// ) => {
//   const gmail = google.gmail({ version: "v1", auth });
//   await gmail.users.messages.send({
//     userId: email,
//     requestBody: {
//       name: title,
//       // mimeType: "text/plain",
//     },
//     // media: {
//     //   body: message,
//     //   // mimeType: "text/plain",
//     // },
//     To: message
//     // media: {
//     //   body: message,
//     // },
//   });
//   console.log("Messages sent");
// };

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "testMailer@test.com",
    pass: "qwerty",
  },
});

export const sendToEmail = async () => {
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "kirnos007@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
