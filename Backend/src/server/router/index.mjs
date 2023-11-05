import Router from "koa-router";

import { auth } from "./auth.mjs";
import { users } from "./users.mjs";

export const router = Router({ prefix: "/api" });

router.use(auth.routes()).use(auth.allowedMethods());
router.use(users.routes()).use(users.allowedMethods());
