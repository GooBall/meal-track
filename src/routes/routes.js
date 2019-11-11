import KoaRouter from "koa-router";
import { getMeals, getMealsForToday } from "../controllers/meals";
const router = new KoaRouter();

router.get("/", ctx => (ctx.body = { version: "1.0.0" }));
router.get("meals", "/meals", async ctx => (ctx.body = getMeals(ctx.query)));
router.get(
  "mealForToday",
  "/meals/today",
  async ctx => (ctx.body = getMealsForToday(ctx.query))
);
router.get("/*", async ctx => (ctx.body = { error: 404 }));

export default router;
