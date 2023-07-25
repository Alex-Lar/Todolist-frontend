import getRandomTodos from "./seeds.js";

const state = {
  todos: getRandomTodos(5),
  filters: "All",
};

console.log(state);
