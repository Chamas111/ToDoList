const form = document.querySelector("#inputTask");

const input = document.querySelector("input");

const main = document.querySelector(".main");

const ul = document.querySelector("#incomplete-tasks");
let items = [];

function saveToLocalStorage() {
  localStorage.setItem("item", JSON.stringify(items));
}

(function () {
  items = JSON.parse(localStorage.getItem("item")) || [];
  render();
})();

/* Create Task */

// ----------------Add new Task---------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const item = event.target.item.value;
  console.log("item", item);
  if (item) {
    console.log("HELLO");
    items.push(item);
    // e.target.reset();
    saveToLocalStorage();
    render();
  }
});

function render() {
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
    console.log("li.firstElementChild", span.parentElement);
    console.log("item", item);
    editButton.onclick = () =>
      handleEdit(index, item, divWrap, span, editButton, btnWrap);
    deleteButton.onclick = () => handleDelete(index, li);
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
    console.log("newItem", newItem);
    itemSpan.textContent = newItem;
    divItem.replaceChild(itemSpan, updateInput);
    divBtn.replaceChild(updateButton, saveButton);

    items = items.map((theItem, i) => {
      if (index === i) {
        return newItem;
      } else {
        return newItem;
      }
    });
    saveToLocalStorage();
  });
  //listItemChild = listItem.firstElementsChild;
  divBtn.replaceChild(saveButton, updateButton);
}

/* function handleEdit(index, item, thespan, button, div) {
  console.log("index", index);
  console.log("index", item);
  // const span =
  //const div = thespan.parentElement;
  const li = button.parentNode;
  // console.log("div", div);
  if (button.textContent === "Edit") {
    console.log("edit", button.textContent);

    const updateInput = document.createElement("input");
    updateInput.type = "text";
    updateInput.value = thespan.textContent;
    div.replaceChild(updateInput, thespan);
    //li.insertBefore(div, thespan);
    // li.removeChild(thespan);
    button.textContent = "save";
  } else if (button.textContent === "save") {
    //console.log("vvvvvvvvvb", updateInput);
    const updateInput = div.firstElementChild;
    console.log("bbbbbbbbbbb", updateInput);
    const newspan = document.createElement("span");
    //console.log("spannnnn", span);
    newspan.textContent = updateInput.value;
    console.log("newspan", updateInput.value);
    div.replaceChild(newspan, updateInput);
    //div.removeChild(updateInput);
    button.textContent = "edit";

    saveToLocalStorage();
  }
} */

function handleDelete(index, listItem) {
  items.splice(index, 1);
  saveToLocalStorage();
  ul.removeChild(listItem);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  const task = input.value;
  
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

/*   let localItems = JSON.parse(localStorage.getItem("localitem"));
  if (localItems === null) {
    tasklist = [];
  } else {
    tasklist = localItems;
  }
  tasklist.push(input.value);
  localStorage.setItem("localitem", JSON.stringify(tasklist)); */
/*
  input.value = "";

  /* Edit and Remove Btn */
/*
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
      //deleteItem();
    }
  });
});
/*delete from LocalStrage */

/* function deleteItem() {
  let localItems = JSON.parse(localStorage.getItem("localitem"));

  let index = localItems.filter((Element) => localItems.Element == "localitem");
  console.log("index", index);
  tasklist.splice(index[0], 1);
  localStorage.setItem("localitem", JSON.stringify(tasklist));
}
 */
/* checkbox confirmation */
/*
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
/*
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
*/
