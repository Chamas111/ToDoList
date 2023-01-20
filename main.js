const form = document.querySelector("#inputTask");
console.log("ffff", form);
const input = document.querySelector("input");
//console.log("cccc", input);
const main = document.querySelector(".main");
//console.log("ddd", main);
const ul = document.querySelector("#incomplete-tasks");
//console.log("ddd", ul);

/* Create Task */

function createLi() {
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
  const span = document.createElement("p");
  span.classList.add("lead", "fw-normal", "mb-0", "cross-out");
  span.textContent = input.value;
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
  editBtn.className = "bi-pen me-3";
  const removeBtn = document.createElement("i");
  removeBtn.className = "bi-trash3";

  li.appendChild(checkbox);
  li.appendChild(divWrap);
  divWrap.appendChild(span);
  li.appendChild(btnWrap);
  btnWrap.appendChild(editBtn);
  btnWrap.appendChild(removeBtn);

  return li;
}

// ----------------Add new Task---------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = createLi();

  if (input.value !== "") {
    ul.appendChild(li);
    input.value = "";
  }
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

/* editing task */
function editTask(button) {
  const li = button.parentNode.parentNode;
  const updatedTask = document.createElement("input");
  const parent = document.getElementsByClassName("taskTextArea")[0];
  const neighbor = li.getElementsByClassName("cross-out")[0];
  console.log("edit mode", li);
  updatedTask.value = neighbor.innerHTML;
  parent.replaceChild(updatedTask, neighbor);
}

/* Button actions for each task */

ul.addEventListener("click", (event) => {
  if (
    event.target.className === "bi-pen me-3" ||
    event.target.className === "bi-trash3"
  ) {
    //console.log(event.target);
    console.log("gggggggggggggg", "BUTTON");
    const button = event.target;
    const li = button.parentNode.parentNode;
    const ul = li.parentNode;
    console.log(li);
    console.log(ul);
    if (button.className === "bi-trash3") {
      console.log(ul);

      ul.removeChild(li);
    } else if (button.className === "bi-pen me-3") {
      editTask(button);
      /*let editElement = prompt("Please enter your change", span.innerText);
      if (editElement != null) {
        span.innerHTML = editElement;
      }
      /*
      const span = li.firstElementChild;
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      console.log("ffff", input.value);
      li.insertBefore(input, span);
      console.log("eeeeeeeeeee");
      li.removeChild(span);
      console.log("sssssssssss");
      button.textContent = "save";
      //console.log(button.className);
    } else if (button.textContent === "save") {
      //const input = li.firstElementChild;

      const span = document.createElement("span");
      console.log("sssssssssss", span);
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = "bi-pen me-3";
    }
  }
});
function editTask() {
 */
    }
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
      const para = document.getElementsByTagName("p");
      const li = document.getElementsByTagName("li");
      para[i].classList.remove("text-decoration-line-through");
      li[i].classList.remove("responded");
      checkboxes[i].checked = false;
      document.getElementById("markAll").textContent = "Mark all";
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      const para = document.getElementsByTagName("p");
      const li = document.getElementsByTagName("li");
      para[i].classList.add("text-decoration-line-through");
      li[i].classList.add("responded");
      checkboxes[i].checked = true;
      document.getElementById("markAll").textContent = "Unmark all";
    }
  }
}
