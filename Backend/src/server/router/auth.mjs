import Router from "koa-router";

export const auth = Router();

auth.get("/oauth2callback", async (ctx) => {
  console.log('auth');
});
