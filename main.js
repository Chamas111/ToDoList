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
  console.log(li.appendChild(checkbox));
  li.appendChild(divWrap);
  divWrap.appendChild(inputEl);
  li.appendChild(btnWrap);
  btnWrap.appendChild(editBtn);
  btnWrap.appendChild(removeBtn);

  ul.appendChild(li);

  /*Add to localStorage*/

  let localItems = JSON.parse(localStorage.getItem("localitem"));
  if (localItems === null) {
    tasklist = [];
  } else {
    tasklist = localItems;
  }
  tasklist.push(input.value);
  localStorage.setItem("localitem", JSON.stringify(tasklist));

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
      //deleteItem(li);
      console.log("li", li);
      ul.removeChild(li);
      deleteItem();
    }
  });
});
/*delete from LocalStrage */

function deleteItem() {
  let localItems = JSON.parse(localStorage.getItem("localitem"));

  let index = localItems.filter((Element) => localItems.Element == "localitem");
  console.log("index", index);
  tasklist.splice(index[0], 1);
  localStorage.setItem("localitem", JSON.stringify(tasklist));
}

/* checkbox confirmation */

ul.addEventListener("change", (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode;
  if (checked) {
    li.classList.add("responded", "text-decoration-line-through");
    document.getElementById("markAll").textContent = "Unmark all";
  } else {
    li.classList.remove("responded", "text-decoration-line-through");
  }
});

/* Mark All */

function checkAll() {
  const checkboxes = document.querySelectorAll("input[type ='checkbox']");
  const markAll = document.getElementById("markAll");

  if (markAll.textContent == "Mark all") {
    for (var checkbox of checkboxes) {
      if (!checkbox.checked) {
        checkbox.parentElement.classList.add(
          "responded",
          "text-decoration-line-through"
        );
        checkbox.checked = true;
      }

      document.getElementById("markAll").textContent = "Unmark all";
    }
  } else {
    for (var checkbox of checkboxes) {
      checkbox.checked = false;
      checkbox.parentElement.classList.remove(
        "responded",
        "text-decoration-line-through"
      );
      markAll.textContent = "Mark all";
    }
  }
}

function removeAll() {
  const checkboxes = document.querySelectorAll("input[type ='checkbox']");

  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      ul.removeChild(checkbox.parentElement);
    }
  }
}
