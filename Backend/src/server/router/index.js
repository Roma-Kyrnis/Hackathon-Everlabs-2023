import * as Router from "koa-router";

import * as users from "./users";

export const router = Router();

router.use(users.routes()).use(users.allowedMethods());

