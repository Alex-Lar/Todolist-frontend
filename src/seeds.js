const todos = [
  { todo: "Go for a run", complete: false },
  { todo: "Learn to play a musical instrument", complete: true },
  { todo: "Buy groceries", complete: true },
  { todo: "Read a book", complete: false },
  { todo: "Write a blog post", complete: false },
  { todo: "Prepare a presentation for the conference", complete: true },
  { todo: "Go on a road trip with friends", complete: false },
  { todo: "Clean the house", complete: true },
  { todo: "Start a new project from scratch", complete: false },
  { todo: "Practice guitar", complete: true },
  { todo: "Cook dinner", complete: false },
  { todo: "Take a nap", complete: true },
  { todo: "Finish coding project", complete: false },
  { todo: "Go to the gym", complete: true },
  { todo: "Write a book on a topic of interest", complete: false },
  { todo: "Call a friend", complete: false },
  { todo: "Learn a new language", complete: false },
  { todo: "Plan a vacation", complete: true },
  { todo: "Organize the closet", complete: false },
  { todo: "Watch a movie", complete: false },
  { todo: "Attend a meeting", complete: true },
  { todo: "Do my homework", complete: false },
  { todo: "Start a new book", complete: false },
  { todo: "Visit a museum", complete: false },
  { todo: "Fix the broken chair", complete: false },
  { todo: "Research a new topic", complete: false },
  { todo: "Paint a picture", complete: true },
  { todo: "Update the website", complete: false },
  { todo: "Volunteer at a local charity", complete: true },
  { todo: "Plan a surprise party for a loved one", complete: false },
  { todo: "Explore a new city or country", complete: false },
  { todo: "Learn to cook a gourmet dish", complete: true },
  { todo: "Start a blog or a YouTube channel", complete: false },
  { todo: "Take a photography workshop", complete: true },
  { todo: "Learn to code a web application", complete: false },
  { todo: "Go hiking", complete: true },
  { todo: "Water the plants", complete: false },
  { todo: "Take out the trash", complete: true },
  { todo: "Send an email", complete: false },
  { todo: "Do yoga", complete: false },
  { todo: "Write a song", complete: true },
  { todo: "Attend a live music concert", complete: false },
  { todo: "Start a fitness routine", complete: true },
  { todo: "Read the complete works of a favorite author", complete: false },
  { todo: "Learn a new dance style", complete: true },
  { todo: "Volunteer for a community service project", complete: false },
  { todo: "Try a new adventurous activity", complete: false },
  { todo: "Learn to cook a new recipe", complete: false },
  { todo: "Start a DIY project", complete: true },
  { todo: "Read a classic novel", complete: false },
  { todo: "Take a photography trip", complete: true },
  { todo: "Learn a new dance style", complete: false },
  { todo: "Try a new workout routine", complete: true },
  { todo: "Write a short story", complete: false },
  { todo: "Explore a new hiking trail", complete: true },
  { todo: "Volunteer for a local charity", complete: false },
  { todo: "Learn to play a musical instrument", complete: true },
  { todo: "Start a meditation practice", complete: false },
  { todo: "Create a personal website", complete: true },
  { todo: "Take a painting class", complete: false },
  { todo: "Learn a new language", complete: true },
  { todo: "Start a book club", complete: false },
  { todo: "Learn to code a mobile app", complete: true },
  { todo: "Learn to create digital art", complete: true },
  { todo: "Explore a new hiking trail", complete: false },
  { todo: "Take a cooking class", complete: true },
  { todo: "Learn to play chess", complete: false },
  { todo: "Attend a theater performance", complete: false },
  { todo: "Start a home garden", complete: true },
  { todo: "Learn to meditate", complete: false },
  { todo: "Learn a new programming language", complete: true },
  { todo: "Take a dance class", complete: false },
  { todo: "Write a poem", complete: false },
  { todo: "Try a new sport", complete: true },
  { todo: "Learn to sew", complete: false },
  { todo: "Start a podcast", complete: true },
  { todo: "Visit a national park", complete: false },
  { todo: "Learn to play a new instrument", complete: false },
  { todo: "Take up photography", complete: true },
  { todo: "Learn to bake bread", complete: false },
  { todo: "Start a journal", complete: true },
];

const getRandomIndexes = (qty = 5) => {
  const randIndexes = [];

  for (let i = 0; i < qty; i++) {
    let randIndex = Math.floor(Math.random() * qty);
    if (randIndexes.length) {
      while (randIndexes.includes(randIndex)) {
        randIndex = Math.floor(Math.random() * qty);
      }
    }
    randIndexes.push(randIndex);
  }

  return randIndexes;
};

export default (qty = 5) => {
  const randIndexes = getRandomIndexes(qty);
  const randTodos = [];

  for (const index of randIndexes) {
    randTodos.push(todos[index]);
  }

  return randTodos;
};
