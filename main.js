const form = document.querySelector("#inputTask");

const input = document.querySelector("input");

const main = document.querySelector(".main");

const ul = document.querySelector("#incomplete-tasks");
let items = [];
let checkLists = [];

function saveToLocalStorage() {
  localStorage.setItem("item", JSON.stringify(items));
}

(function () {
  items = JSON.parse(localStorage.getItem("item")) || [];
  create();
})();

function saveCheckToLocalStorage() {
  localStorage.setItem("checkList", JSON.stringify(checkLists));
}

(function () {
  checkLists = JSON.parse(localStorage.getItem("checkList")) || [];
  create();
})();

/* Create Task */

// ----------------Add new Task---------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const item = event.target.item.value;
  console.log("item", item);
  if (item) {
    items.push(item);
    // e.target.reset();
    saveToLocalStorage();
    create();
    saveCheckToLocalStorage();
  }
});

function create() {
  ul.innerHTML = "";
  items.forEach((item, index) => {
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
    const span = document.createElement("span");
    span.textContent = item;

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-success");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const btnWrap = document.createElement("div");
    btnWrap.classList.add(
      "d-flex",
      "flex-row",
      "gap-2",
      "justify-content-end",
      "align-items-center",
      "mb-1"
    );
    li.appendChild(checkbox);
    li.appendChild(divWrap);
    divWrap.appendChild(span);
    li.appendChild(btnWrap);
    btnWrap.appendChild(editButton);
    btnWrap.appendChild(deleteButton);

    editButton.onclick = () =>
      handleEdit(index, item, divWrap, span, editButton, btnWrap);
    deleteButton.onclick = () => handleDelete(index, li);
    checkbox.onclick = () => confirmation(index, li, checkbox, span);
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    ul.appendChild(li);
    input.value = "";
  });
}

function handleEdit(index, item, divItem, itemSpan, updateButton, divBtn) {
  const updateInput = document.createElement("input");
  updateInput.type = "text";
  updateInput.value = item;
  divItem.replaceChild(updateInput, itemSpan);
  const saveButton = document.createElement("button");
  saveButton.classList.add("btn", "btn-success");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    const newItem = updateInput.value;

    itemSpan.textContent = newItem;
    divItem.replaceChild(itemSpan, updateInput);
    divBtn.replaceChild(updateButton, saveButton);

    items = items.map((theItem, i) => {
      if (index === i) {
        return newItem;
      } else {
        return theItem;
      }
    });
    saveToLocalStorage();
  });
  //listItemChild = listItem.firstElementsChild;
  divBtn.replaceChild(saveButton, updateButton);
}

function handleDelete(index, listItem) {
  items.splice(index, 1);
  saveToLocalStorage();
  saveCheckToLocalStorage();
  ul.removeChild(listItem);
}

/* checkbox confirmation */
/* 
ul.addEventListener("change", (event) => {
  event.preventDefault();
  const checkbox = event.target;
  //const div = document.querySelector(".taskTextArea");
  const checked = checkbox.checked;
  const li = checkbox.parentNode;
  if (checked) {
    li.classList.add("responded");
    //div.classList.add("text-decoration-line-through");
    document.getElementById("markAll").textContent = "Unmark all";
  } else {
    li.classList.remove("responded");
    // div.classList.remove("text-decoration-line-through");
  }
}); */
function confirmation(index, listItem, chk, span) {
  console.log("index", index);
  console.log("listItem", listItem);
  //console.log("div", div);
  console.log("span", span);
  console.log("chk", chk);
  //const checked = checkbox.checked;
  // const li = checkbox.parentNode;
  if (chk.checked === true) {
    listItem.classList.add("responded");
    //div.classList.add("text-decoration-line-through");
    document.getElementById("markAll").textContent = "Unmark all";
    //const result = document.querySelector(".taskTextArea");
    //const span = result.ELEMENT_NODE;
    //console.log(span);
    checkLists.push(span.textContent);
    saveCheckToLocalStorage();
  } else {
    listItem.classList.remove("responded");
    // div.classList.remove("text-decoration-line-through");
    //checkLists.splice(span.textContent, 1);
    checkLists.splice(checkLists.indexOf(span.textContent), 1);

    saveCheckToLocalStorage();
  }
}

/* Mark All */

function checkAll() {
  const checkboxes = document.querySelectorAll("input[type ='checkbox']");
  const markAll = document.getElementById("markAll");

  if (markAll.textContent == "Mark all") {
    for (var checkbox of checkboxes) {
      if (!checkbox.checked) {
        checkbox.parentElement.classList.add("responded");
        checkbox.checked = true;
      }

      document.getElementById("markAll").textContent = "Unmark all";
    }
  } else {
    for (var checkbox of checkboxes) {
      checkbox.checked = false;
      checkbox.parentElement.classList.remove("responded");
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
