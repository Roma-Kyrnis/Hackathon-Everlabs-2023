function setErrorResponse(incomingError, ctx) {
  ctx.status = incomingError.status || 500;

  if (incomingError.name === DATABASE) ctx.status = 409;

  const defaultMessage = ctx.response.message;
  const errMessage =
    ctx.status < 500
      ? `${defaultMessage}: ${incomingError.message}`
      : defaultMessage;

  if (ctx.accepts("json")) {
    ctx.body = { error: errMessage };
  } else {
    ctx.body = errMessage;
  }
}

function errorHandler() {
  return async (ctx, next) => {
    try {
      await next();

      if (ctx.status === 404)
        setErrorResponse({ status: 404, message: ctx.response.message }, ctx);
    } catch (err) {
      setErrorResponse(err, ctx);

      ctx.app.emit("error", err, ctx);
    }
  };
}

module.export = { errorHandler };
