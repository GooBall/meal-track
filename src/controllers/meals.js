import db from "diskdb";
import moment from "moment";

export const getMeals = () => {
  db.connect("./data", ["meals"]);
  return db.meals.find();
};

export const getMealsByTime = mealTime => {
  db.connect("./data", ["meals"]);
  return db.meals.find({ mealTime: mealTime });
};

export const getMealsByCategory = category => {
  db.connect("./data", ["meals"]);
  return db.meals.find({ category: category });
};

export const getMealsForToday = () => {
  db.connect("./data", ["meals"]);
  // Set the start date and fetch today's date
  const startDate = moment([2019, 10, 6]);
  const today = moment();

  // Get the number of days difference
  const diffDays = today.diff(startDate, "days");

  // Divide the days into 3 and then get the decimal
  const daysIntoThree = diffDays / 3;
  const decimal = daysIntoThree - Math.floor(daysIntoThree);

  // Based on the decimal, set the category
  const category = decimal > 0.6 ? "c" : decimal > 0.3 ? "b" : "a";

  return db.meals.find({ category: category });
};
