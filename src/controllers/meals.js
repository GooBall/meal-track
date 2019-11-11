import db from "diskdb";
import moment from "moment";

const getQueryParams = urlParams => {
  const params = {};

  if (urlParams.category) {
    params.category = urlParams.category;
  }

  if (urlParams.mealTime) {
    params.mealTime = urlParams.mealTime;
  }

  return params;
};

export const getMeals = urlParams => {
  db.connect("./data", ["meals"]);
  const params = urlParams ? getQueryParams(urlParams) : null;
  return db.meals.find(params);
};

export const getMealsForToday = urlParams => {
  db.connect("./data", ["meals"]);
  const params = urlParams ? getQueryParams(urlParams) : null;

  // Set the start date and fetch today's date
  const startDate = moment([2019, 10, 6]);
  const today = moment();

  // Get the number of days difference
  const diffDays = today.diff(startDate, "days");

  // Divide the days into 3 and then get the decimal
  const daysIntoThree = diffDays / 3;
  const decimal = daysIntoThree - Math.floor(daysIntoThree);

  // Based on the decimal, set the category
  params.category = decimal > 0.6 ? "c" : decimal > 0.3 ? "b" : "a";

  return db.meals.find(params);
};
