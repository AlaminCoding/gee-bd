const pCategory = document.querySelectorAll(".program-category");

pCategory.forEach((element, index) => {
  let categoryChilds = element.querySelectorAll("li");
  let nextTabList =
    element.parentElement.parentElement.querySelectorAll(".tab-list");
  categoryChilds.forEach((element, index) => {
    element.addEventListener("click", function () {
      element.classList.add("tab-active");
      nextTabList[index].classList.add("tab-list-active");
      for (let i = 0; i < categoryChilds.length; i++) {
        if (i != index) {
          categoryChilds[i].classList.remove("tab-active");
          nextTabList[i].classList.remove("tab-list-active");
        }
      }
    });
  });
});

const eCategory = document.querySelector(".ex-tab-header");
const eBody = document.querySelectorAll(".ex-tab-body");
let eChild = eCategory.querySelectorAll("li");

eChild.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("tab-active");
    eBody[index].classList.add("ex-tab-active");
    for (let i = 0; i < eBody.length; i++) {
      if (i != index) {
        eChild[i].classList.remove("tab-active");
        eBody[i].classList.remove("ex-tab-active");
      }
    }
  });
});
