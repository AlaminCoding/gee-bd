const ftabBtn = document.querySelectorAll(".ftab-btn");
const mainForm = document.querySelectorAll(".main-form");
const formBtn = document.querySelector(".form-btn");
const ftabNext = document.querySelector(".ftab-next");
const ftabPrev = document.querySelector(".ftab-prev");
let initPos = 0;

function changeForm(pos) {
  mainForm.forEach((element, index) => {
    if (index === pos) {
      element.classList.add("d-block");
      ftabBtn[pos].classList.add("ftab-active");
    } else {
      element.classList.remove("d-block");
      ftabBtn[index].classList.remove("ftab-active");
    }
  });
}
ftabBtn.forEach((element, index) => {
  element.addEventListener("click", function () {
    changeForm(index);
    initPos = index;
    btnStatus();
    if (initPos === mainForm.length - 1) {
      ftabNext.innerHTML = `Apply Now <i class="bi bi-check-circle-fill"></i>`;
    } else {
      ftabNext.innerHTML = `Next Step <i class="bi bi-arrow-right-short"></i>`;
    }
  });
});

ftabNext.addEventListener("click", function () {
  if (initPos < mainForm.length - 1) {
    initPos++;
    changeForm(initPos);
    btnStatus();
  }
  if (initPos === mainForm.length - 1) {
    ftabNext.innerHTML = `Apply Now <i class="bi bi-check-circle-fill"></i>`;
  } else {
    //   submit the form
  }
});

ftabPrev.addEventListener("click", function () {
  initPos--;
  changeForm(initPos);
  btnStatus();
  if (initPos < mainForm.length - 1) {
    ftabNext.innerHTML = `Next Step <i class="bi bi-arrow-right-short"></i>`;
  }
});

function btnStatus() {
  if (initPos > 0) {
    ftabPrev.classList.add("d-block");
    formBtn.classList.add("justify-content-between");
  } else {
    ftabPrev.classList.remove("d-block");
    formBtn.classList.remove("justify-content-between");
  }
}
btnStatus();
