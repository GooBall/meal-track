import KoaRouter from "koa-router";
import {
  getMeals,
  getMealsByTime,
  getMealsByCategory,
  getMealsForToday
} from "../controllers/meals";
const router = new KoaRouter();

router.get("/", ctx => (ctx.body = { version: "1.0.0" }));
router.get("meals", "/meals", async ctx => (ctx.body = getMeals()));
router.get(
  "mealByTime",
  "/meals/meal-time/:mealTime",
  async ctx => (ctx.body = getMealsByTime(ctx.params.mealTime))
);
router.get(
  "mealByCategory",
  "/meals/category/:category",
  async ctx => (ctx.body = getMealsByCategory(ctx.params.category))
);
router.get(
  "mealForToday",
  "/meals/today",
  async ctx => (ctx.body = getMealsForToday())
);
router.get("/*", async ctx => (ctx.body = { error: 404 }));

export default router;
