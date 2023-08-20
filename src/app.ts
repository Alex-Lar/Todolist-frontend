import getRandomTodos from './seeds';

const state = {
  todos: getRandomTodos(5),
  filters: 'All',
};

console.log(state);
