const filtersBtn = document.querySelector(".filters-button");
const filtersList = document.querySelector(".filters-list");

const toggleShowClass = () => {
  window.requestAnimationFrame(() => {
    filtersList.classList.toggle("show");
  });
};

filtersBtn.addEventListener("click", toggleShowClass);

window.addEventListener("click", (e) => {
  window.requestAnimationFrame(() => {
    if (filtersList.classList.contains("show")) {
      console.log(e);
    }
  });
});
