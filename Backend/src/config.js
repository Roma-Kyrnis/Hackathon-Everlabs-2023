import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: Number(process.env.PORT) || 3000,
  HOST: process.env.HOST || "localhost",
};
