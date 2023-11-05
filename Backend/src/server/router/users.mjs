import Router from "koa-router";

import { users as dbUsers } from "../../db/index.mjs";

export const users = Router();

users.get("/users/:id", async (ctx) => {
  const user = await dbUsers(ctx.params.id);
  ctx.body = user;
});
