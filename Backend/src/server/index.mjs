import Koa from "koa";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import morgan from "koa-morgan";
import bodyParser from "koa-bodyparser";

import { config } from "../config.mjs";
import { errorHandler } from "./middlewares.mjs";
import { router } from "./router/index.mjs";

const app = new Koa();

app.use(helmet());
app.use(morgan("dev"));

app.use(errorHandler());

app.use(bodyParser());

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

let serverInstance;
export const start = () => {
  serverInstance = app.listen(config.PORT, config.HOST, () => {
    console.log(`Server start on "http://${config.HOST}:${config.PORT}"`);
  });
};

export const stop = async (callback) => {
  if (serverInstance) await serverInstance.close(callback);
};
