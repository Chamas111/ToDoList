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

  create();
})();

/* Create Task */

// ----------------Add new Task---------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const item = event.target.item.value;
  // console.log("item", item);
  if (item) {
    items.push({ text: item, isCompleted: false });
    saveToLocalStorage();
    create();
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
    span.textContent = item.text;

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
  updateInput.value = item.text;
  console.log("item.text", item.text);
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
        return { text: newItem, isCompleted: theItem.isCompleted };
      } else {
        return { text: theItem, isCompleted: !theItem.isCompleted };
      }
    });
    saveToLocalStorage();
  });

  divBtn.replaceChild(saveButton, updateButton);
}

function handleDelete(index, listItem) {
  items.splice(index, 1);
  saveToLocalStorage();

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

/*   if (chk.checked === true) {
    listItem.classList.add("responded");
    items[index].isCompleted = !items[index].isCompleted;
    document.getElementById("markAll").textContent = "Unmark all";
    
  } else {
    listItem.classList.remove("responded");
    items[index].isCompleted = !items[index].isCompleted;
    
  }
  saveToLocalStorage();
} */
function confirmation(index, listItem, chk, span) {
  console.log("hellooooooooooooooooo");

  items.forEach((todo) => {
    if (!todo.isCompleted) {
      console.log("trueeeeeee");
      span.style.textDecoration = "line-through";
      todo.isCompleted = true;
      //chk.checked = true;
    } else if (todo.isCompleted) {
      console.log("falseeeee");
      span.style.textDecoration = "none";
      todo.isCompleted = false;
      //chk.checked = false;
    }
  });
  saveToLocalStorage();
}
/* /* /* Mark All */

/* function checkAll() {
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
  saveToLocalStorage();
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
