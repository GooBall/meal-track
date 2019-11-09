import KoaRouter from "koa-router";
const router = new KoaRouter();

router.get("/", ctx => (ctx.body = { version: "1.0.0" }));
router.get("/meals", ctx => (ctx.body = { text: "yum" }));
router.get("/*", ctx => (ctx.body = { error: "404" }));

export default router;
