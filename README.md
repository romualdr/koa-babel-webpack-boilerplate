### koa-babel-webpack-boilerplate

A simple boilerplate to create REST apps with
* [koa@next](https://github.com/koajs/koa/tree/v2.x) (currently 2.0.0-alpha.3)
* babel (for **async**, **await** and stage-2 support)
* webpack

---

### How to use

Boilerplate is packed with [koa-router@next](https://github.com/alexmingoia/koa-router/tree/master/) in order to have a routing system.

**Install development dependencies**

```javascript
npm i
```

**Create a route**

```javascript
router.get('/:id', async (ctx) => {
  ctx.body = await database.get(ctx.params.id);
  // Feel the awesomeness
});
```

**Run development**

```javascript
npm run development
```

**Build**

```javascript
npm run build
```

**Run the built version**

```javascript
node bin/server.bundle.js
// or
npm run run
```

**Distribute and run the built file**

```javascript
npm i --production // to avoid dev dependencies
npm run run
```

### Exceptions

This boilerplate contains a simple HTTP exception system in order to demonstrate how to deal with exceptions in koa. See **exceptions.js**.

----

### Why webpack/babel ?

babel-node is not recommended for production. While node doesn't support natively **async/await**, we need to transpile the code with babel. Webpack is not necessary in this boilerplate but having the server built in a single file is pretty awesome though.

### License

MIT
