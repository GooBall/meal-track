const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");

const app = new Koa();
const router = new KoaRouter();

app.use(json());

router.get("/", ctx => (ctx.body = { version: "1.0.0" }));
router.get("/meals", ctx => (ctx.body = { text: "yum" }));
router.get("/*", ctx => (ctx.body = { error: "404" }));

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
