import * as dotenv from "dotenv";
import fs from "node:fs";
import process from "node:process";
import path from "node:path";
dotenv.config();

const ABSOLUTE_PATH = process.cwd();
const TOKEN_PATH = path.join(ABSOLUTE_PATH, "token.json");

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {{"type": string, "client_id": string, "client_secret": string, "refresh_token": string}|null}
 */
function loadSavedCredentialsIfExist() {
  try {
    const content = fs.readFileSync(TOKEN_PATH);
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}

export const config = {
  PORT: Number(process.env.PORT) || 3000,
  HOST: process.env.HOST || "localhost",
  absolutePath: ABSOLUTE_PATH,

  GoogleCreds: {
    // If modifying these scopes, delete token.json.
    SCOPES: [
      "https://www.googleapis.com/auth/gmail.readonly",
      "https://www.googleapis.com/auth/gmail.send",
    ],

    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    TOKEN_PATH,
    CREDENTIALS_PATH: path.join(ABSOLUTE_PATH, "credentials.json"),
    savedCredentials: loadSavedCredentialsIfExist(),
    REDIRECT_URL:
      process.env.GMAIL_REDIRECT_URL || "http://localhost:3000/oauth2callback",
  },
};
