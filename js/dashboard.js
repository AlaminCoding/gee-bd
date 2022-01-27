// Varsity Tab panel
const panelTabHeading = document.querySelectorAll(".panel-tab-heading");
const panelTabContent = document.querySelectorAll(".panel-tab-content");

panelTabHeading.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("panel-tab-heading-active");
    panelTabContent[index].classList.add("panel-tab-content-active");
    for (let i = 0; i < panelTabContent.length; i++) {
      if (i != index) {
        panelTabHeading[i].classList.remove("panel-tab-heading-active");
        panelTabContent[i].classList.remove("panel-tab-content-active");
      }
    }
  });
});

// Dashboard Tab
const dbList = document.querySelectorAll(".db-list");
const panel = document.querySelectorAll(".panel");

dbList.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("db-list-active");
    panel[index].classList.add("panel-active");
    for (let i = 0; i < panel.length; i++) {
      if (i != index) {
        dbList[i].classList.remove("db-list-active");
        panel[i].classList.remove("panel-active");
      }
    }
  });
});

// Edit Functionality
const editBtn = document.getElementById("edit-btn");
const submitBtn = document.querySelector(".submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const saveBtn = document.getElementById("save-btn");
const infoTd = document.querySelectorAll(".info-td");
const infoInput = document.querySelectorAll(".info-input");

editBtn.addEventListener("click", function () {
  editBtn.style.display = "none";
  submitBtn.style.display = "flex";
  infoTd.forEach((element) => {
    element.style.display = "none";
  });
  infoInput.forEach((element) => {
    element.style.display = "block";
  });
});

cancelBtn.addEventListener("click", function () {
  editBtn.style.display = "block";
  submitBtn.style.display = "none";
  infoTd.forEach((element) => {
    element.style.display = "block";
  });
  infoInput.forEach((element) => {
    element.style.display = "none";
  });
});

// Form Handeling
const tInput = document.querySelectorAll(".t-input");
const fInput = document.querySelectorAll(".f-input");
const pForm = document.getElementById("profile-form");
tInput.forEach((element, index) => {
  element.addEventListener("keyup", function () {
    fInput[index].value = element.value;
  });
});

saveBtn.addEventListener("click", function () {
  pForm.submit();
});
