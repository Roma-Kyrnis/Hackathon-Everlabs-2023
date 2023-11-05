import * as Router from "koa-router";

import { users as dbUsers } from "../../db";

const users = Router();

users.get("/users/:id", async (ctx) => {
  const user = await dbUsers(ctx.params.id);
  ctx.body = user;
});

module.exports = users;
