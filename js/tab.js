const tab = document.querySelectorAll(".blog-tab-list");
tab.forEach((element, index) => {
  let allTabs = element.children;
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].addEventListener("click", function () {
      let parent = allTabs[i].parentElement.parentElement.parentElement;
      let tabRows = parent.querySelectorAll(".tab-row");
      allTabs[i].classList.add("tab-active");
      tabRows[i].classList.add("d-flex");
      for (let j = 0; j < allTabs.length; j++) {
        if (j != i) {
          allTabs[j].classList.remove("tab-active");
          tabRows[j].classList.remove("d-flex");
        }
      }
    });
  }
});
