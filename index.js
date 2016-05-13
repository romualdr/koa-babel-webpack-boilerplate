'use strict';

import 'babel-polyfill';

import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import { Exceptions, ExceptionHandler } from './exceptions';


const app = new Koa();
const router = Router();

/**
  Middlewares
**/

app
  // Counting time
  .use(async (ctx, next) => {
    let start = Date.now();
    await next();
    console.log(`[${ctx.request.method}][${ctx.request.url}] ${Date.now() - start} ms.`);
  })
  .use(async (ctx, next) => {
    try {
      await next();
      if (!ctx.body)
        throw new Exceptions.NotFound(`Endpoint [${ctx.request.url}] not found.`);
      ctx.body = {
        ok: true,
        content: ctx.body
      };
    } catch (e) {
      ctx.body = ExceptionHandler(e);
    }
  })
  // Body parser
  .use(BodyParser())
  .use(async (ctx, next) => {
    ctx.state = {};
    ctx.state.query = ctx.request.query;
    ctx.state.body = ctx.request.body;
    await next();
  })
  // routes
  .use(router.routes())
  // Allowed methods
  .use(router.allowedMethods());



/**
  Routes
**/

router.get('/', (ctx, next) => {
  ctx.body = { hello: "world" };
});

/**

You can use ES7 async/await syntax
router.get('/:name', async (ctx, next) => {

  ctx.body = await somethingReturningAPromise();

});

**/

/**
 launch
**/

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
