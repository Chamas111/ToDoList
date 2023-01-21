const form = document.querySelector("#inputTask");

const input = document.querySelector("input");

const main = document.querySelector(".main");

const ul = document.querySelector("#incomplete-tasks");

/* Create Task */

// ----------------Add new Task---------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value;

  const li = document.createElement("li");
  li.classList.add("d-flex");
  const divWrap = document.createElement("div");
  divWrap.classList.add(
    "taskTextArea",
    "px-3",
    "py-1",
    "d-flex",
    "align-items-center",
    "flex-grow-1"
  );
  const inputEl = document.createElement("input");
  inputEl.classList.add("lead", "fw-normal", "mb-0", "cross-out");
  inputEl.setAttribute("readonly", "readonly");
  inputEl.type = "text";
  inputEl.value = task;
  //inputEl.textContent = input.value;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const btnWrap = document.createElement("div");
  btnWrap.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-end",
    "align-items-center",
    "mb-1"
  );
  const editBtn = document.createElement("i");
  //editBtn.textContent = "edit";
  editBtn.className = "bi-pen me-3";
  editBtn.setAttribute("edit", "edit");
  const removeBtn = document.createElement("i");
  //removeBtn.textContent = "Delete";
  removeBtn.className = "bi-trash3";

  li.appendChild(checkbox);
  li.appendChild(divWrap);
  divWrap.appendChild(inputEl);
  li.appendChild(btnWrap);
  btnWrap.appendChild(editBtn);
  btnWrap.appendChild(removeBtn);

  ul.appendChild(li);
  input.value = "";

  /* Edit and Remove Btn */
  let Active = false;
  editBtn.addEventListener("click", () => {
    if (!Active) {
      //console.log(editBtn.dataset);
      inputEl.removeAttribute("readonly");
      inputEl.focus();
      Active = true;
    } else if (Active) {
      inputEl.setAttribute("readonly", "readonly");
      Active = false;
    }
  });

  removeBtn.addEventListener("click", () => {
    if ((removeBtn.className = "bi-trash3")) {
      ul.removeChild(li);
    }
  });
});

/* checkbox confirmation */

ul.addEventListener("change", (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode;
  if (checked) {
    li.classList.add("responded");
    li.getElementsByClassName("cross-out")[0].classList.add(
      "text-decoration-line-through"
    );
  } else {
    li.classList.remove("responded");
    li.getElementsByClassName("cross-out")[0].classList.remove(
      "text-decoration-line-through"
    );
  }
});

/* Mark All */
function checkAll() {
  const checkboxes = document.querySelectorAll("input[type ='checkbox']");
  let allChecked;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked !== true) {
      allChecked = false;
      break;
    } else {
      allChecked = true;
    }
  }

  if (allChecked) {
    for (let i = 0; i < checkboxes.length; i++) {
      const para = document.querySelectorAll("input[type ='checkbox']");
      const li = document.getElementsByTagName("li");
      para[i].classList.remove("text-decoration-line-through");
      li[i].classList.remove("responded");
      checkboxes[i].checked = false;
      document.getElementById("markAll").textContent = "Mark all";
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      const para = document.querySelectorAll("input[type ='checkbox']");
      const li = document.getElementsByTagName("li");
      para[i].classList.add("text-decoration-line-through");
      li[i].classList.add("responded");
      checkboxes[i].checked = true;
      document.getElementById("markAll").textContent = "Unmark all";
    }
  }
}
