import * as Koa from "koa";
import * as cors from "@koa/cors";
import * as helmet from "koa-helmet";
import * as morgan from "koa-morgan";
import * as bodyParser from "koa-bodyparser";

import { PORT, HOST } from "../config";
import { errorHandler } from "./middlewares";
import * as router from "./router";

const app = new Koa();

app.use(helmet());
app.use(morgan("dev"));

app.use(errorHandler());

app.use(bodyParser());

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

let serverInstance;
export const start = () => {
  serverInstance = app.listen(PORT, HOST, () => {
    log.info(`Server start on "http://${HOST}:${PORT}"`);
  });
};

export const stop = async (callback) => {
  if (serverInstance) await serverInstance.close(callback);
};
